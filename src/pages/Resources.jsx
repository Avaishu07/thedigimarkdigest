import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure to import Link for routing
import 'animate.css'; // Import Animate.css for additional animations

const newsData = [
  {
    id: 1,
    title: 'Latest Trends in Technology',
    date: 'October 14, 2024',
    category: 'Technology',
    image: 'https://img.freepik.com/premium-photo/unique-ai-woman-photos-modern-design-projects_1199394-209783.jpg',
  },
  {
    id: 2,
    title: 'Health Tips for a Better Life',
    date: 'October 13, 2024',
    category: 'Health',
    image: 'https://img.freepik.com/premium-photo/unique-ai-woman-photos-modern-design-projects_1199394-209718.jpg',
  },
  {
    id: 3,
    title: 'Understanding Climate Change',
    date: 'October 12, 2024',
    category: 'Environment',
    image: 'https://img.freepik.com/premium-photo/unique-ai-woman-photos-modern-design-projects_1199394-209549.jpg',
  },
  {
    id: 4,
    title: 'The Future of AI',
    date: 'October 11, 2024',
    category: 'AI',
    image: 'https://img.freepik.com/premium-photo/woman-with-blue-digital-helm-blue-light-her-face_931542-21.jpg',
  },
  {
    id: 5,
    title: 'Travel Tips for 2024',
    date: 'October 10, 2024',
    category: 'Travel',
    image: 'https://img.freepik.com/premium-photo/woman-with-blue-helm-glowing-head-is-shown-with-glowing-light_931542-18.jpg',
  },
  {
    id: 6,
    title: 'Finance Strategies for Beginners',
    date: 'October 9, 2024',
    category: 'Finance',
    image: 'https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg',
  },
];

const NewsCards = () => {
  return (
    <Container className="mt-4">
      <Row>
        {newsData.map((news) => (
          <Col md={4} key={news.id} className="mb-3">
            <Card className="hover-shadow animate__animated animate__fadeIn" style={{ transition: '0.3s', borderRadius: '8px' }}>
              <Card.Img variant="top" src={news.image} alt={news.title} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{news.date}</Card.Subtitle>
                <Card.Text>
                  Category: <strong>{news.category}</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Resources = () => {
  return (
    <>
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Container className="text-center mt-4">
        <h1 className="font-weight-bold animate__animated animate__fadeIn">Resources</h1>
        <nav className="breadcrumb justify-content-center">
          <ol className="breadcrumb dt-justify-content-center dt-mt-0 dt-mb-0">
            <li className="breadcrumb-item">
              <Link to="/" className="text-decoration-none">Home</Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/resources" className="text-decoration-none">Resources</Link>
            </li>
          </ol>
        </nav>
      </Container>
      
      <NewsCards />
      </div>
      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4 mt-5 animate__animated animate__fadeIn">
        <Container fluid>
          <Row>
            <Col md={4}>
              <h5><i className="bi bi-file-person-fill"></i> About Us</h5>
              <p>We bring the latest in digital marketing strategies and insights to keep you ahead of the curve.</p>
            </Col>
            <Col md={4}>
              <h5><i className="bi bi-fast-forward-circle-fill"></i> Quick Links</h5>
              <ul className="list-unstyled text-center">
                <li><Link to="/about" className="text-light"><i className="bi bi-file-person-fill"></i> About</Link></li>
                <li><Link to="/contact" className="text-light"><i className="bi bi-person-lines-fill"></i> Contact</Link></li>
                <li><Link to="/privacy" className="text-light"><i className="bi bi-shield-lock-fill"></i> Privacy Policy</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5><i className="bi bi-person-check-fill"></i> Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="https://facebook.com" className="text-light"><i className="bi bi-messenger"></i> Facebook</a></li>
                <li className="list-inline-item"><a href="https://twitter.com" className="text-light"><i className="bi bi-twitter"></i> Twitter</a></li>
                <li className="list-inline-item"><a href="https://instagram.com" className="text-light"><i className="bi bi-instagram"></i> Instagram</a></li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p className="mb-0">© {new Date().getFullYear()} Digital Marketing Publication. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
   
    </>
  );
};

export default Resources;
