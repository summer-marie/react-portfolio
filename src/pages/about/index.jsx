import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataAbout,
  meta,
  education,
  skills,
  strengths,
} from "../../content_option.js";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataAbout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="py-4">{dataAbout.aboutMe}</p>
            </div>
          </Col>
        </Row>        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <table className="table table-borderless">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i} >
                      <th scope="row" className="text-nowrap">{data.certification}</th>
                      <td className="text-nowrap">{data.where}</td>
                      <td className="text-end text-nowrap">{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>          <Col lg="7">
            {skills.map((data, i) => {
              const getProgressColor = (value) => {
                if (value <= 60) return '#4caf50'; // green for 60% and below
                else if (value <= 70) return '#2196f3'; // lighter blue
                else if (value <= 80) return '#1976d2'; // medium blue
                else if (value <= 90) return '#0d47a1'; // darker blue
                return '#002171'; // darkest blue for above 90%
              };

              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                        backgroundColor: getProgressColor(data.value)
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Strengths</h3>
          </Col>
          <Col lg="7">
            {strengths.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
