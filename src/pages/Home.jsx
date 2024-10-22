import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, Carousel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar"; // Updated navbar
import { IconBase } from "react-icons";
import { FaSun, FaMoon } from "react-icons/fa"; // Make sure to install react-icons
import { motion } from 'framer-motion';
import axios from "axios";
import ContactForm from "./ContactForm";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [newsPosts, setNewsPosts] = useState([]);
  const [slidenews, setSlideNews] = useState([])
  const [featuredNews, setFeaturedNews] = useState(null);
  const [latestUpdates, setLatestUpdates] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
    document.body.classList.toggle("light-mode", isDarkMode);
  };

  useEffect(() => {
    const fetchNewsPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getnewspost'); // Use Axios to fetch data
        setNewsPosts(response.data); // Set the state with the fetched data
        setSlideNews(response.data);
        setLatestUpdates(response.data);
        setPopularArticles(response.data)
        // Assuming all news posts are latest updates

        // Assuming the first news item is featured; adjust as necessary
        if (response.data.length > 0) {
          setFeaturedNews(response.data[0]); // Set the first post as featured
        }
      } catch (error) {
        console.error('Error fetching news posts:', error);
      }
    };

    fetchNewsPosts();
  }, []);

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
      <Container>
        <Row>
          <Col lg={3}>
            {/* Left Column */}
            {newsPosts.slice(0, 2).map((post, index) => (
              <Row key={index}>
                <Col>
                  <Link to={`/viewnews/${post._id}`} className="text-decoration-none text-dark">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      className="hover-effect"
                    >
                      <Card className="">
                        <Card.Img
                          variant="top"
                          src={post.imageUrl} // Use the image URL from the post
                          alt={post.title}
                        />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Link>
                </Col>
              </Row>
            ))}
          </Col>

          {/* Center Column */}
          <Col lg={6}>
            <Row>
              <Col>
                {newsPosts.length > 2 && (
                  <Link to={`/viewnews/${newsPosts[2]._id}`} className="text-decoration-none text-dark">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      className="hover-effect"
                    >
                      <Card className="">
                        <Card.Img
                          variant="top"
                          src={newsPosts[2].imageUrl} // Use the image URL from the post
                          alt={newsPosts[2].title}
                        />
                        <Card.Body>
                          <Card.Title className="my-2">{newsPosts[2].title}</Card.Title>
                          <Card.Text>
                            {newsPosts[2].content.substring(0, 100)}... {/* Preview of content */}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Link>
                )}
              </Col>
            </Row>
          </Col>

          {/* Right Column */}
          <Col lg={3}>
            {newsPosts.slice(3, 5).map((post, index) => (
              <Row key={index}>
                <Col>
                  <Link to={`/viewnews/${post._id}`} className="text-decoration-none text-dark">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      className="hover-effect"
                    >
                      <Card className="">
                        <Card.Img
                          variant="top"
                          src={post.imageUrl} // Use the image URL from the post
                          alt={post.title}
                        />
                        <Card.Body>
                          <Card.Title>{post.title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Link>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Rest of your component... */}
      {/* Carousel Section for Latest News */}
      <Container fluid className="my-5 section-background animate__animated animate__fadeInUp">
        <h2 className="text-center mb-4  hover-effect">
          Latest News
        </h2>
        <Carousel interval={3000}>
          {slidenews.map((news, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100  hover-effect"
                src={news.imageUrl}
                alt={`Slide ${index + 1}`}
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h5>{news.title || `News Title ${index + 1}`}</h5>
                <p>{news.description || `Description for news ${index + 1}`}</p>
                <Button variant="outline-light" as={Link} to={`/news/${news.id}`}>
                  Read More
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      {/* Featured News Section */}
      {/* <Container fluid className="my-5 section-background animate__animated animate__fadeInLeft">
        <Row>
          <Col md={7}>
            <h2 className="text-center mb-4  hover-effect mt-4"><><i class="bi bi-newspaper"></i></>Featured News</h2>
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
            <h3 className="text-center mb-4  hover-effect mt-4"><><i class="bi bi-newspaper"></i></>Latest Updates</h3>
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
                <Card className=" hover-effect">
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
      </Container> */}
      <Container fluid className="my-5 section-background animate__animated animate__fadeInLeft">
        <Row>
          <Col md={7}>
            <h2 className="text-center mb-4  hover-effect mt-4">
              Featured News
            </h2>
            {featuredNews && (
              <Card>
                <Card.Img
                  variant="top"
                  src={featuredNews.imageUrl || "https://online.sbu.edu/sites/default/files/field/image/shutterstock_430087837.jpg"}
                />
                <Card.Body>
                  <Card.Title>{featuredNews.title || "Breaking News: SEO Trends for 2024"}</Card.Title>
                  <Card.Text>
                    {featuredNews.description || "Stay informed about the most important trends in SEO that will shape the digital landscape."}
                  </Card.Text>
                  <Button variant="primary" as={Link} to={`/news/${featuredNews.id || "seo-trends-2024"}`}>Read More</Button>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col md={4}>
            <h3 className="text-center mb-4  hover-effect mt-4">
              Latest Updates
            </h3>
            <ul className="list-unstyled">
              {latestUpdates.slice(0, 3).map((news, index) => (
                <li className="py-2" key={index}>
                  <Card>
                    <Card.Body>
                      <p>{news.category || "General"}</p>
                      <Card.Title>{news.title || `News Title ${index + 1}`}</Card.Title>
                      <Button variant="link" as={Link} to={`/articles/${news.id}`}>
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>
      {/* Popular Articles Section */}
    <Container fluid className="my-5 section-background animate__animated animate__fadeInRight">
            <h2 className="text-center mb-4  hover-effect">Popular Articles</h2>
            <Row>
                {popularArticles.slice(0, 4).map((article, index) => (
                    <Col md={3} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card>
                                <Card.Img variant="top" className="img-fluid" src={article.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>{article.description}</Card.Text>
                                    <Button variant="primary" as={Link} to={`/articles/${article.id}`}>
                                        Read More
                                    </Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
      
      {/* Newsletter Signup Section */}
      <Container className="my-5 section-background animate__animated animate__fadeIn">
       <ContactForm/>
      </Container>
      {/* Footer Section */}
      <footer className="text-center py-3 bg-dark text-light mt-5">
        <p>&copy; 2024 the Digital Digest. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
export default Home;
