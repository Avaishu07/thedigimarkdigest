import { useState } from "react"; 
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import NavBar from "../components/Navbar"; // Assuming you have a NavBar component
import "animate.css"; // Import Animate.css for animations
import axios from "axios";


function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  console.log(errorMessage)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error messages

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
    };

    try {
        const response = await axios.post('http://localhost:3000/api/contact', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log(response.data.message); // Log success message
        setFormSubmitted(true); // Update state to show thank you message
    } catch (error) {
        console.error('Error sending message:', error);
        setErrorMessage('There was an error sending your message. Please try again.');
    }
};

  return (
    <div>
      {/* Contact Page Header */}
      <div className="bg-dark text-white text-center py-5 animate__animated animate__fadeIn">
        <h1>Contact Us</h1>
        <p>We would love to hear from you! Reach out to us with any questions or feedback.</p>
      </div>

      {/* Contact Form Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="shadow-lg p-5 bg-light animate__animated animate__fadeInUp">
              <h2 className="text-center mb-4 text-dark">Connect With Us</h2>

              {formSubmitted ? (
                <div className="text-center">
                  <h3 className="text-success">Thank you for contacting us!</h3>
                  <p>We will get back to you shortly.</p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Label><i className="bi bi-person-check me-2"></i>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" name="name" required />
                  </Form.Group>

                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label><i className="bi bi-mailbox2-flag me-2"></i>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" name="email" required />
                  </Form.Group>

                  <Form.Group controlId="subject" className="mb-3">
                    <Form.Label><i className="bi bi-substack me-2"></i>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" name="subject" required />
                  </Form.Group>

                  <Form.Group controlId="message" className="mb-4">
                    <Form.Label><i className="bi bi-chat-square-text-fill me-2"></i>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Write your message here..." name="message" required />
                  </Form.Group>

                  {errorMessage && <div className="text-danger text-center mb-3">{errorMessage}</div>}

                  <Button variant="primary" type="submit" className="w-100">Submit
                  </Button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Contact Info Section */}
      <Container className="py-5">
        <Row className="animate__animated animate__fadeInUp">
          <Col md={4} className="text-center mb-4">
            <div className="bg-primary text-white p-4 rounded">
              <h5><><i className="bi bi-geo-fill"></i></>Office Location</h5>
              <p>City Vista B Wing 6th Floor kharadi 411014</p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="bg-success text-white p-4 rounded">
              <h5><><i className="bi bi-inboxes"></i></>Email Us</h5>
              <p>contact@digitalmarketing.com</p>
            </div>
          </Col>
          <Col md={4} className="text-center mb-4">
            <div className="bg-warning text-dark p-4 rounded">
              <h5><><i className="bi bi-person-lines-fill"></i></>Call Us</h5>
              <p>(123) 456-7890</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="bg-dark text-light text-center py-4 mt-5">
        <Container>
          <Row>
            <Col>
              <p className="mb-0">
                © {new Date().getFullYear()} Digital Marketing Publication. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Contact;
