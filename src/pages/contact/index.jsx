import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option.js";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { contactConfig } from "../../content_option.js";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      subject: formData.subject,
      message: formData.message,
    };

    // Debug: Log the template params to console
    // console.log("Template Params being sent:", templateParams);
    // console.log("Message content specifically:", formData.message);
    // console.log("Message length:", formData.message.length);

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            user_email: "",
            user_name: "",
            subject: "",
            message: "",
            loading: false,
            alertMessage: "SUCCESS! Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            ...formData,
            loading: false,
            alertMessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleMessageChange = (e) => {
    console.log("Message field specifically changed:", e.target.value);
    setFormdata({
      ...formData,
      message: e.target.value,
    });
  };

  const handleChange = (e) => {
    console.log(`Field changed: ${e.target.name} = "${e.target.value}"`);
    console.log(`Target type: ${e.target.type}, Target tag: ${e.target.tagName}`);
    console.log(`Current formData before update:`, formData);
    
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    
    console.log(`New formData after update:`, newFormData);
    setFormdata(newFormData);
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Alert
              //show={formData.show}
              variant={formData.variant}
              className={`rounded-0 co_alert ${
                formData.show ? "d-block" : "d-none"
              }`}
              onClose={() => setFormdata({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertMessage}</p>
            </Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={handleSubmit} className="contact__form w-100">
              <Row className="mb-3">
                <Col lg="12" className="form-group mb-3">
                  <input
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name"
                    value={formData.user_name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg="12" className="form-group mb-3">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    type="email"
                    value={formData.user_email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg="12" className="form-group mb-3">
                  <input
                    className="form-control rounded-0"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    value={formData.subject || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg="12" className="form-group">
                  <textarea
                    className="form-control rounded-0"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message || ""}
                    onInput={(e) => {
                      setFormdata({
                        ...formData,
                        message: e.target.value,
                      });
                    }}
                    onChange={handleMessageChange}
                    required
                  ></textarea>
                </Col>
              </Row>
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit">
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
