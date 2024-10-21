import { useState } from "react";
import { Col, Container, Row, Card, Button, Carousel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar"; // Updated navbar
import { IconBase } from "react-icons";
import { FaSun, FaMoon } from "react-icons/fa"; // Make sure to install react-icons
import { motion } from 'framer-motion';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
    document.body.classList.toggle("light-mode", isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      {/* <NavBar /> */}

      {/* Theme Toggle Button */}
      <div className="py-1 px-1">
  <button className="btn btn-outline-secondary theme-toggle-btn d-flex align-items-center" onClick={toggleTheme}>
    {isDarkMode ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
    {isDarkMode ? <><i class="bi bi-lightbulb-off-fill"></i>
    </> : ""}
  </button>
</div>         
      {/* Gap after Hero Section */}
      <Container fluid className="my-2">
    <Row>
        <Col lg={3}>
            <Row>
                <Col>
                    <Link to="Viewnews.jsx" className="text-decoration-none text-dark">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            exit={{ opacity: 0, scale: 0.8 }} 
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.02 }} // Slight scaling on hover
                            className="hover-effect"
                        >
                            <Card className="shadow-sm">
                                <Card.Img
                                    variant="top"
                                    width={200}
                                    height={120}
                                    src="https://images.dmnews.com/wp-content/uploads/2022/06/depositphotos_77287410-stock-photo-digital-marketing.jpg"
                                    alt="Digital Marketing"
                                />
                                <Card.Body>
                                    <Card.Title>Digital Marketing Strategies</Card.Title>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">
                    <Link to="/viewnews" className="text-decoration-none text-dark">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            exit={{ opacity: 0, scale: 0.8 }} 
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.02 }} // Slight scaling on hover
                            className="hover-effect"
                        >
                            <Card className="shadow-sm">
                                <Card.Img
                                    variant="top"
                                    width={200}
                                    height={120}
                                    src="https://800c8044-cdn.agilitycms.cloud/Attachments/NewItems/Digital-marketingTrends_20220816153859_0.jpg"
                                    alt="Digital Marketing Trends"
                                />
                                <Card.Body>
                                    <Card.Title>Upcoming Digital Marketing Trends</Card.Title>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Link>
                </Col>
            </Row>
        </Col>
      {/* Center Column */}
        <Col lg={6}>
            <Row>
                <Col>
                    <Link to="/Viewnews.jsx" className="text-decoration-none text-dark">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            exit={{ opacity: 0, scale: 0.8 }} 
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.02 }} // Slight scaling on hover
                            className="hover-effect"
                        >
                            <Card className="shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src="https://media.licdn.com/dms/image/C5612AQF5aWBhzEiEDQ/article-cover_image-shrink_720_1280/0/1605883273004?e=2147483647&v=beta&t=Pie_4lC-oCkuK61E70CeeNu0AAdE7NTXFRxhxgRwwC4"
                                    alt="SEO Best Practices"
                                />
                                <Card.Body>
                                    <Card.Title className="my-2">SEO Best Practices for 2024</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui corrupti quam culpa vitae earum totam rem quidem aliquam accusamus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Link>
                </Col>
            </Row>
        </Col>
  {/* Right Column */}
        <Col lg={3}>
            <Row>
                <Col>
                    <Link to="/view-news" className="text-decoration-none text-dark">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            exit={{ opacity: 0, scale: 0.8 }} 
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.02 }} // Slight scaling on hover
                            className="hover-effect"
                        >
                            <Card className="shadow-sm">
                                <Card.Img
                                    variant="top"
                                    width={200}
                                    height={120}
                                    src="https://static.startuptalky.com/2021/12/Digital-Marketing-Trends-StartupTalky.jpg"
                                    alt="Digital Marketing Trends 2023"
                                />
                                <Card.Body>
                                    <Card.Title>Top Digital Marketing Trends for 2023</Card.Title>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">
                    <Link to="/view-news" className="text-decoration-none text-dark">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            exit={{ opacity: 0, scale: 0.8 }} 
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.02 }} // Slight scaling on hover
                            className="hover-effect"
                        >
                            <Card className="shadow-sm">
                                <Card.Img
                                    variant="top"
                                    width={200}
                                    height={120}
                                    src="https://images.yourstory.com/cs/wordpress/2016/09/digital-marketing-1.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
                                    alt="Content Marketing Insights"
                                />
                                <Card.Body>
                                    <Card.Title>Content Marketing Insights</Card.Title>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Link>
                </Col>
            </Row>
        </Col>
    </Row>
</Container>
  );
  {/* Rest of your component... */}
      {/* Carousel Section for Latest News */}
      <Container fluid className="my-5 section-background animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4 shadow-sm hover-effect"><><i class="bi bi-newspaper"></i></>Latest News</h2>
        <Carousel interval={3000}>
          <Carousel.Item>
            <img className="d-block w-100 shadow-sm hover-effect" src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-covered-in-confetti-800x525.jpg" alt="First slide" style={{ height: '400px', objectFit: 'cover' }} />
            <Carousel.Caption>
              <h5>SEO Trends for 2024</h5>
              <p>Stay informed about the most important trends in SEO that will shape the digital landscape.</p>
              <Button variant="outline-light" as={Link} to="/news/seo-trends-2024">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 shadow-sm hover-effect" src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" alt="Second slide" style={{ height: '400px', objectFit: 'cover' }} />
            <Carousel.Caption>
              <h5>New Social Media Strategies</h5>
              <p>Discover new strategies for social media that will boost your online presence.</p>
              <Button variant="outline-light" as={Link} to="/articles/social-media-strategy">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 shadow-sm hover-effect" src="https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png" alt="Third slide" style={{ height: '400px', objectFit: 'cover' }} />
            <Carousel.Caption>
              <h5>Content Marketing Trends</h5>
              <p>Learn about the latest trends that are transforming content marketing.</p>
              <Button variant="outline-light" as={Link} to="/articles/content-marketing-trends">Read More</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      {/* Featured News Section */}
      <Container fluid className="my-5 section-background animate__animated animate__fadeInLeft">   
        <Row>
          <Col md={7}>
          <h2 className="text-center mb-4 shadow-sm hover-effect mt-4"><><i class="bi bi-newspaper"></i></>Featured News</h2>      
            <Card>
              <Card.Img variant="top" src="https://online.sbu.edu/sites/default/files/field/image/shutterstock_430087837.jpg" />
              <Card.Body>
                <Card.Title>Breaking News: SEO Trends for 2024</Card.Title>
                <Card.Text>
                  Stay informed about the most important trends in SEO that will shape the digital landscape.
                </Card.Text>
                <Button variant="primary" as={Link} to="/news/seo-trends-2024">Read More</Button>
              </Card.Body>
            </Card>  
          </Col>
          <Col md={4}>
            <h3 className="text-center mb-4 shadow-sm hover-effect mt-4"><><i class="bi bi-newspaper"></i></>Latest Updates</h3>
            <ul className="list-unstyled">
              <li className="py-2">
              <Card>
                  <Card.Body>
                    <p>Category</p>
                    <Card.Title>New Social Media Strategies</Card.Title>
                    <Button variant="link" as={Link} to="/articles/social-media-strategy">Read More</Button>
                  </Card.Body>
                </Card>
              </li>
              <li className="py-2">
              <Card className="shadow-sm hover-effect">
                  <Card.Body>
                    <p>Category</p>
                    <Card.Title>Effective Email Marketing Techniques</Card.Title>
                    <Button variant="link" as={Link} to="/articles/email-marketing-techniques">Read More</Button>
                  </Card.Body>
                </Card>
              </li>
              <li className="py-2">
              <Card>
                  <Card.Body>
                    <p>Category</p>
                    <Card.Title>YouTube Marketing Trends</Card.Title>
                    <Button variant="link" as={Link} to="/articles/content-marketing-trends">Read More</Button>
                  </Card.Body>
                </Card>
              </li>
              <li className="py-2 ">
              <Card>
                  <Card.Body>
                    <p>Category</p>
                    <Card.Title>Advertising Marketing Trends</Card.Title>
                    <Button variant="link" as={Link} to="/articles/content-marketing-trends">Read More</Button>
                  </Card.Body>
                </Card>
              </li>
            </ul>
          </Col>
        </Row>
      </Container> 
      <Container fluid>
    <Row>
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}         >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}      >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}     >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }} >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
    </Row>
    {/* Second section */}
    <Row className="mt-2">
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }} >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }} >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}  >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}  >
                <Card className="shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://img.freepik.com/photos-premium/cyborg-augmente-posthumain_810293-114.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary animate__animated animate__pulse animate__delay-2s animate__infinite">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
    </Row>
</Container>
{/* Popular Articles Section */}
<Container fluid className="my-5 section-background animate__animated animate__fadeInRight">
    <h2 className="text-center mb-4 shadow-sm hover-effect">
        <><i className="bi bi-newspaper"></i></>Popular Articles
    </h2>
    <Row>
        <Col md={4}>
            <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}    >
                <Card>
                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/sharing-articles-concept-illustration_114360-5407.jpg" />
                    <Card.Body>
                        <Card.Title>Maximize Your Marketing ROI</Card.Title>
                        <Card.Text>Learn how to effectively allocate your marketing budget to maximize returns.</Card.Text>
                        <Button variant="primary" as={Link} to="/articles/maximize-marketing-roi">Read More</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col md={4}>
            <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}   >
                <Card>
                    <Card.Img variant="top" src="https://media.istockphoto.com/id/1405789142/vector/people-operating-a-smartphone-seo-image-illustration.jpg?s=612x612&w=0&k=20&c=hx8nibnZW7d_f-FKZDVjBwgz3EPTmvlKG_IQd6BSY48=" />
                    <Card.Body>
                        <Card.Title>Building Your Brand Identity</Card.Title>
                        <Card.Text>Understand the importance of brand identity in the digital world.</Card.Text>
                        <Button variant="primary" as={Link} to="/articles/build-brand-identity">Read More</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
        <Col md={4}>
            <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}     >
                <Card>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPCXt2qtIC6IWFdbyvhgqPyvZiVasovebetDA79gARog6GNhXOt-PTQMDcZObeOXy-e4&usqp=CAU" />
                    <Card.Body>
                        <Card.Title>Email Marketing Best Practices</Card.Title>
                        <Card.Text>Explore best practices for effective email marketing campaigns.</Card.Text>
                        <Button variant="primary" as={Link} to="/articles/email-marketing-best-practices">Read More</Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Col>
    </Row>
</Container>
      {/* Testimonials Section */}
      <Container className="my-5 section-background animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4 shadow-sm hover-effect"><><i class="bi bi-book"></i></>What Our Readers Say</h2>
        <Row>
          <Col md={4}>
        
            <Card className="text-center">
              <Card.Body>
                <Card.Text>&quot;This publication has transformed my approach to digital marketing!&quot;</Card.Text>
                <Card.Footer>- John Doe</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Text>&quot;Invaluable insights and up-to-date information on the latest trends.&quot;</Card.Text>
                <Card.Footer>- Jane Smith</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Text>&quot;Highly recommend this site for anyone looking to stay ahead!&quot;</Card.Text>
                <Card.Footer>- Mark Lee</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* Newsletter Signup Section */}
      <Container className="my-5 section-background animate__animated animate__fadeIn">
        <h2 className="text-center mb-4 shadow-sm hover-effect"><><i class="bi bi-hand-thumbs-up-fill"></i></>Stay Updated!</h2>
        <Form className="text-center">
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Button variant="primary shadow-sm hover-effect mb-4 my-4 animate__animated animate__pulse animate__delay-2s animate__infinite" type="submit" as={Link} to="/contact">
            Subscribe
          </Button>
        </Form>
      </Container>
      {/* Footer Section */}
      <footer className="bg-dark text-light text-center py-4 mt-5 animate__animated animate__fadeIn">
        <Container>
          <Row>
            <Col md={4}>
              <h5><><i class="bi bi-file-person-fill me-2"></i></>About Us</h5>
              <p>We bring the latest in digital marketing strategies and insights to keep you ahead of the curve.</p>
            </Col>
            <Col md={4}>
              <h5><><i class="bi bi-fast-forward-circle-fill me-2"></i></>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-light"><><i class="bi bi-file-person-fill"></i></>About</Link></li>
                <li><Link to="/contact" className="text-light"><><i class="bi bi-person-lines-fill"></i></>Contact</Link></li>
                <li><Link to="/privacy" className="text-light"><><i class="bi bi-shield-lock-fill"></i></>Privacy Policy</Link></li>
              </ul>
            </Col>
            <Col md={4}>
              <h5><><i class="bi bi-person-check-fill me-2"></i></>Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="https://facebook.com" className="text-light"><><i class="bi bi-messenger"></i></>Facebook</a></li>
                <li className="list-inline-item"><a href="https://twitter.com" className="text-light"><><i class="bi bi-twitter"></i></>Twitter</a></li>
                <li className="list-inline-item"><a href="https://instagram.com" className="text-light"><><i class="bi bi-instagram"></i></>Instagram</a></li>
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
    </div>
  );
}
export default Home;
