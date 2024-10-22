import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import Contact from "../assets/contact.avif"

function ContactForm() {
    const [state, handleSubmit] = useForm("mqakabww");

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <Container className=" section-background animate__animated animate__fadeIn">
           
            <Row className='d-flex justify-content-center align-items-center vh-100'>
                
                <Col>
                <h2 className="text-start mb-2 ">Stay Updated!</h2>
                    <Form className="text-start rounded-4 bg-danger p-5" onSubmit={handleSubmit}>
                        <Form.Label>Email</Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                id="message"
                                name="message"
                                placeholder="Your message"
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </Form.Group>
                        <Button
                            variant="primary  hover-effect mt-2 animate__animated animate__pulse animate__delay-2s animate__infinite"
                            type="submit"
                            disabled={state.submitting}
                        >
                            Subscribe
                        </Button>
                    </Form>
                </Col>
                <Col>
                <img src={Contact} className='img-fluid' alt="" />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;
