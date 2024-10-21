import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useState } from 'react';

function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=262,fit=crop,q=95/d95gWv9O1GFyGqLq/digimartz-official-logo-1-mxB7EJDa1PsE0NE3.png"
            alt="Logo"
            width={50}
            height={40}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link className="mx-2">Home</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Category" id="basic-nav-dropdown" className="mx-2">
              <Container className="p-3">
                <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                  <div className="d-flex flex-column">
                    {[
                      "ABM",
                      "Account Based Marketing",
                      "Adtech",
                      "Advertising",
                      "Advertising & Promotion",
                      "Advertising Technology",
                      "Advocacy, Loyalty & Referrals",
                      "Affiliate Marketing & Management",
                      "AI",
                      "AI Compass",
                      "Analytics",
                      "Apps for Business",
                      "Audience/Marketing Data & Data Enhancement",
                      "Audio",
                      "Automation",
                      "B2B Data",
                      "B2BTechByte Insights",
                      "B2BTechByte Radar",
                      "Banking",
                      "Behavioral Marketing",
                      "Blockchain",
                      "Brand Safety",
                      "Business/Customer Intelligence & Data Science",
                      "Channel, Partner & Local Marketing",
                      "Chatbots Conversational-ai",
                      "Cloud Security",
                      "CMS & Web Experience Management",
                      "Commerce & Sales",
                      "Content & Experience",
                      "Content Advertising",
                      "Conversational Intelligence",
                      "CRM",
                      "Crowdfunding",
                      "Customer Data Platform",
                      "Customer Engagement",
                      "Customer Experience, Service & Success",
                      "Cyber Security",
                      "Data Analytics",
                      "Data Management",
                      "Database Security",
                      "Digital Advertising",
                      "Digital Asset Management",
                      "Digital Marketing",
                      "Display & Programmatic Advertising",
                      "Ecommerce",
                      "Email Marketing"
                    ].map((category, index) => (
                      <LinkContainer to={`/category/${category.toLowerCase().replace(/ /g, '-')}`} key={index}>
                        <NavDropdown.Item className="category-item">{category}</NavDropdown.Item>
                      </LinkContainer>
                    ))}
                  </div>
                </div>
              </Container>
            </NavDropdown>

            <LinkContainer to="/about">
              <Nav.Link className="mx-2">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
              <Nav.Link className="mx-2">Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/resources">
              <Nav.Link className="mx-2">Resources</Nav.Link>
            </LinkContainer>
          </Nav>

          <div className="d-flex align-items-center">
            <Form className={`d-flex ${searchOpen ? "search-bar-open" : "search-bar-closed"}`}>
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="me-2 transition"
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>

      <style jsx>{`
        .category-item {
          transition: background-color 0.2s;
        }

        .category-item:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .search-bar-open {
          width: 200px; /* Adjust as needed */
          transition: width 0.3s ease;
        }

        .search-bar-closed {
          width: 0;
          overflow: hidden;
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .category-item {
            font-size: 14px; /* Adjust font size for smaller screens */
          }
        }
      `}</style>
    </Navbar>
  );
}

export default NavBar;
