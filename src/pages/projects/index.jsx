import React, { useState, useEffect } from "react";
import "./style.css";
import "animate.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { projects, meta } from "../../content_option.js";

export const Portfolio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isHovered, setIsHovered] = useState({});

  // Auto-cycle through images every 3 seconds
  useEffect(() => {
    const intervals = {};
    
    projects.forEach((project, projectIndex) => {
      if (project.images && project.images.length > 1 && !isHovered[projectIndex]) {
        intervals[projectIndex] = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [projectIndex]: ((prev[projectIndex] || 0) + 1) % project.images.length
          }));
        }, 3000); // Change image every 3 seconds
      }
    });

    // Cleanup intervals
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [isHovered]); // Re-run when hover state changes

  const nextImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
    }));
  };

  const handleMouseEnter = (projectIndex) => {
    setIsHovered(prev => ({ ...prev, [projectIndex]: true }));
  };

  const handleMouseLeave = (projectIndex) => {
    setIsHovered(prev => ({ ...prev, [projectIndex]: false }));
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg="8">
            <div className="po_items_ho">
              {projects.map((data, i) => {
                const currentImg = currentImageIndex[i] || 0;
                const hasMultipleImages = data.images && data.images.length > 1;
                
                return (
                  <div 
                    key={i} 
                    className="po_item"
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave(i)}
                  >
                    <div className="image-container">
                      <img 
                        src={data.images ? data.images[currentImg] : data.img} 
                        alt={`${data.title || `Project ${i + 1}`} - Image ${currentImg + 1}`} 
                      />
                      
                      {hasMultipleImages && (
                        <>
                          <button 
                            className="carousel-btn prev-btn" 
                            onClick={() => prevImage(i)}
                            aria-label="Previous image"
                          >
                            ‹
                          </button>
                          <button 
                            className="carousel-btn next-btn" 
                            onClick={() => nextImage(i)}
                            aria-label="Next image"
                          >
                            ›
                          </button>
                          <div className="carousel-indicators">
                            {data.images.map((_, imgIndex) => (
                              <span 
                                key={imgIndex}
                                className={`indicator ${imgIndex === currentImg ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [i]: imgIndex }))}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="content">
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      {data.technologies && (
                        <div className="technologies">
                          {data.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      )}
                      <a href={data.link}>view project</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col lg="4" className="d-flex align-items-center justify-content-center">
            <h1 className="animate__animated animate__fadeInUp animate__delay-2s display-4" style={{color: 'var(--text-color-3)'}}>
              More to come...
            </h1>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
