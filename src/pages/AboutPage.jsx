import { Col, Container, Row, Button, Card } from "react-bootstrap";
import NavScrollExample from "../components/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "animate.css/animate.min.css"; // Import Animate.css
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import Icons

function AboutPage() {
  return (
    <div>
   

      {/* Upper Section with Background Color */}
      <Container fluid className="bg-info py-5 text-center text-light">
        <h1 className="display-4 animate__animated animate__fadeIn">About Us</h1>
        <p className="lead animate__animated animate__fadeInUp animate__delay-1s">
          Welcome to The Digital Digest, where we bring you the finest literary works, articles, and features from across the globe. We are committed to excellence in publishing, providing insightful, thought-provoking content for our readers.
        </p>
        <Link to="/subscribe">
          <Button variant="light" className="animate__animated animate__bounceIn">
            Subscribe to Our Magazine
          </Button>
        </Link>
      </Container>

      {/* Mission & Vision Section with Colored Backgrounds */}
      <Container className="mt-5">
        <Row className="d-flex justify-content-center gap-5">
          <Col md={5} className="bg-light rounded-5 p-4 shadow-sm position-relative animate__animated animate__fadeInLeft" style={{ borderLeft: "6px solid #007BFF" }}>
            <h2 className="text-primary">Our Mission</h2>
            <p style={{ color: "#333" }}>
              Our mission at The Digital Digest is to nurture creativity and amplify voices. We strive to provide a platform for emerging and established authors alike, ensuring that every story, article, or feature we publish resonates with our readers.
            </p>
            <div className="mission-overlay position-absolute top-0 left-0 w-100 h-100 bg-primary opacity-25"></div>
          </Col>
          <Col md={5} className="bg-light rounded-5 p-4 shadow-sm position-relative animate__animated animate__fadeInRight" style={{ borderLeft: "6px solid #28A745" }}>
            <h2 className="text-success">Our Vision</h2>
            <p style={{ color: "#333" }}>
              We envision a world where literature, art, and journalism are accessible to all, inspiring readers and shaping opinions. Our goal is to cultivate a community of passionate writers and curious readers united by a love for quality content.
            </p>
            <div className="vision-overlay position-absolute top-0 left-0 w-100 h-100 bg-success opacity-25"></div>
          </Col>
        </Row>
      </Container>

      {/* Stylish Team Section for Publication Website 
      <Container className="my-5 ">
        <h2 className="text-center mb-4 shadow-sm hover-effect">Meet Our Mangement Team</h2>
        <Row className="d-flex justify-content-center">
          <Col md={4} className="mb-4 animate__animated animate__zoomIn">
            <Card className="border-0 shadow-sm team-card h-100">
              <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" className="rounded-circle mx-auto mt-3" style={{ width: '150px' }} />
              <Card.Body className="text-center">
                <Card.Title>Bharat Pawar</Card.Title>
                <Card.Text className="text-muted">
                  <span className="badge bg-primary mb-2">Editor-in-Chief</span>
                  <p>With over 15 years of experience in the publishing industry, Sarah leads our editorial team with an eye for detail and a passion for storytelling.</p>
                </Card.Text>
                <div className="social-icons mt-3">
                  <a href="https://www.linkedin.com" className="text-dark mx-2">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://www.twitter.com" className="text-dark mx-2">
                    <FaTwitter size={24} />
                  </a>
                  <a href="mailto:sarah@example.com" className="text-dark mx-2">
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 animate__animated animate__zoomIn animate__delay-1s">
            <Card className="border-0 shadow-sm team-card h-100">
              <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" className="rounded-circle mx-auto mt-3" style={{ width: '150px' }} />
              <Card.Body className="text-center">
                <Card.Title>Ankush Suryanwanshi</Card.Title>
                <Card.Text className="text-muted">
                  <span className="badge bg-success mb-2">Managing Editor</span>
                  <p>Mark ensures every piece of content meets the highest standards of quality. He oversees day-to-day editorial operations and works closely with authors.</p>
                </Card.Text>
                <div className="social-icons mt-3">
                  <a href="https://www.linkedin.com" className="text-dark mx-2">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://www.twitter.com" className="text-dark mx-2">
                    <FaTwitter size={24} />
                  </a>
                  <a href="mailto:mark@example.com" className="text-dark mx-2">
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4 animate__animated animate__zoomIn animate__delay-2s">
            <Card className="border-0 shadow-sm team-card h-100">
              <Card.Img variant="top" src="https://sources.roboflow.com/dzuGOec8v6bRLhxo590fQ69a22N2/cNc6Q78185vhZDZhqEdS/original.jpg" className="rounded-circle mx-auto mt-3" style={{ width: '150px' }} />
              <Card.Body className="text-center">
                <Card.Title>Amol Patil</Card.Title>
                <Card.Text className="text-muted">
                  <span className="badge bg-info mb-2">Creative Director</span>
                  <p>Emily is responsible for the visual design of our publication. She ensures that every issue is visually engaging and aligns with our creative vision.</p>
                </Card.Text>
                <div className="social-icons mt-3">
                  <a href="https://www.linkedin.com" className="text-dark mx-2">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://www.twitter.com" className="text-dark mx-2">
                    <FaTwitter size={24} />
                  </a>
                  <a href="mailto:emily@example.com" className="text-dark mx-2">
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>*/}

      {/* Call to Action Section with Slide Animation */}
      <Container fluid className="bg-primary text-light py-5 text-center">
        <h2 className="animate__animated animate__slideInLeft">Stay Informed with the Best in Publishing</h2>
        <p className="animate__animated animate__slideInRight animate__delay-1s">
          Subscribe to our newsletter and never miss an update from the world of publishing.
        </p>
        <Link to="/contact">
          <Button variant="light" className="animate__animated animate__pulse animate__delay-2s animate__infinite">
            Contact Us
          </Button>
        </Link>
      </Container>

      {/* Footer */}
      <footer className="text-center py-3 bg-dark text-light mt-5">
        <p>&copy; 2024 the Digital Digest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
