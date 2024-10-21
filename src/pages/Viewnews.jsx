import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'animate.css'; // Import Animate.css for additional animations

const Viewnews = () => {
  return (
    <>
      <Container fluid style={{ height: '100vh', display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <Row className="flex-grow-1">
          <Col lg={9} className="d-flex flex-column">
            <div className="mt-8 flex-grow-1">
              <div className="d-flex justify-content-between mb-2">
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#333 ' } }>Upcoming Digital Marketing Trends</h4>
                  <p className="mb-0 ">Category: Marketing</p>
                  <small className="text-muted ">{new Date().toLocaleString()}</small>
                </div>
              </div>
              <img
                height={300}
                src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                className="img-fluid border rounded p-3"
                alt=""
              />
              <div style={{ marginTop: '20px' }}></div> {/* Added gap after the image */}
              <p>
                As we enter 2024, digital marketing continues to evolve at a rapid pace. Businesses must adapt to stay competitive and relevant. Key trends to watch include the rise of artificial intelligence in content creation, the growing importance of data privacy, and the shift towards personalized marketing strategies.
                <br /><br />
                SEO remains crucial, but it’s more than just keywords now. With search engines prioritizing user experience, optimizing for mobile devices and voice search is becoming essential. Brands should focus on delivering valuable content that addresses user intent and enhances engagement.
                <br /><br />
                Additionally, video marketing is skyrocketing, with platforms like TikTok and Instagram Reels capturing audience attention. Marketers should leverage short, engaging video content to connect with their audiences effectively.
                <br /><br />
                Overall, the landscape is changing, and staying informed about these trends is vital for any marketer aiming to achieve success in the digital realm.
                As we enter 2024, digital marketing continues to evolve at a rapid pace. Businesses must adapt to stay competitive and relevant. Key trends to watch include the rise of artificial intelligence in content creation, the growing importance of data privacy, and the shift towards personalized marketing strategies.
                <br /><br />
                SEO remains crucial, but it’s more than just keywords now. With search engines prioritizing user experience, optimizing for mobile devices and voice search is becoming essential. Brands should focus on delivering valuable content that addresses user intent and enhances engagement.
                <br /><br />
                Additionally, video marketing is skyrocketing, with platforms like TikTok and Instagram Reels capturing audience attention. Marketers should leverage short, engaging video content to connect with their audiences effectively.
                <br /><br />
                Overall, the landscape is changing, and staying informed about these trends is vital for any marketer aiming to achieve success in the digital realm.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A qui sequi ducimus beatae, distinctio est odit autem! Commodi corrupti dolor aliquid dolores, facilis odio odit, nemo vel quasi, veniam suscipit.
                <br /><br />
              </p>

              <div className="d-flex justify-content-between mt-4">
                <div>
                  <Link to="/news/latest2" className="btn btn-primary" style={{ width: '250px', padding: '10px', textAlign: 'center' }}>
                    Previous News
                  </Link>
                </div>
                <div>
                  <Link to="/news/latest4" className="btn btn-primary" style={{ width: '250px', padding: '10px', textAlign: 'center' }}>
                    Next News
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3}>
            <div className="mt-6">
              <h5>Categories</h5>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search categories..."
                  style={{ marginBottom: '10px' }}
                />
              </div>
              <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '4px' }}>
                <ul className="list-group">
                  <li className="list-group-item">SEO</li>
                  <li className="list-group-item">Content Marketing</li>
                  <li className="list-group-item">Social Media</li>
                  <li className="list-group-item">Email Marketing</li>
                  <li className="list-group-item">PPC Advertising</li>
                  <li className="list-group-item">Affiliate Marketing</li>
                  <li className="list-group-item">Influencer Marketing</li>
                  <li className="list-group-item">Analytics</li>
                  <li className="list-group-item">Mobile Marketing</li>
                  <li className="list-group-item">Video Marketing</li>
                  <li className="list-group-item">Marketing Automation</li>
                  <li className="list-group-item">Brand Management</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h5>Latest News</h5>
              <div className="mb-3 p-3 border rounded shadow-sm hover-effect" style={{ backgroundColor: '#f9f9f9' }}>
                <img
                  src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg"
                  alt="New Insights on Digital Marketing"
                  className="img-fluid mb-2"
                />
                <h6>New Insights on Digital Marketing</h6>
                <p>
                  <small className="text-muted">{new Date().toLocaleString()}</small>
                </p>
                <p>
                  Discover the latest insights into digital marketing strategies that can help businesses grow.
                </p>
                <Link to="/news/latest1" className="btn btn-link">Read more</Link>
              </div>
              <div className="mb-3 p-3 border rounded shadow-sm hover-effect" style={{ backgroundColor: '#f9f9f9' }}>
                <img
                  src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg"
                  alt="The Rise of Video Marketing"
                  className="img-fluid mb-2"
                />
                <h6>The Rise of Video Marketing</h6>
                <p>
                  <small className="text-muted">{new Date().toLocaleString()}</small>
                </p>
                <p>
                  Explore how video marketing is becoming essential for brands in 2024.
                </p>
                <Link to="/news/latest2" className="btn btn-link">Read more</Link>
              </div>
              <div className="mb-3 p-3 border rounded shadow-sm hover-effect" style={{ backgroundColor: '#f9f9f9' }}>
                <img
                  src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
                  alt="SEO Trends to Watch"
                  className="img-fluid mb-2"
                />
                <h6>SEO Trends to Watch</h6>
                <p>
                  <small className="text-muted">{new Date().toLocaleString()}</small>
                </p>
                <p>
                  Stay ahead of the curve with these emerging SEO trends.
                </p>
                <Link to="/news/latest3" className="btn btn-link">Read more</Link>
              </div>
            </div>
          </Col>
        </Row>

        {/* Gap before footer */}
        <div style={{ height: '20px' }}></div>

        {/* Footer Section */}
        <footer className="bg-dark text-light text-center py-4 mt-auto">
          <Container fluid>
            <Row>
              <Col md={4}>
                <h5><><i className="bi bi-file-person-fill me-2"></i></>About Us</h5>
                <p>We bring the latest in digital marketing strategies and insights to keep you ahead of the curve.</p>
              </Col>
              <Col md={4}>
                <h5><><i className="bi bi-fast-forward-circle-fill me-2"></i></>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><Link to="/about" className="text-light"><><i className="bi bi-file-person-fill"></i></>About</Link></li>
                  <li><Link to="/contact" className="text-light"><><i className="bi bi-person-lines-fill"></i></>Contact</Link></li>
                  <li><Link to="/privacy" className="text-light"><><i className="bi bi-shield-lock-fill"></i></>Privacy Policy</Link></li>
                </ul>
              </Col>
              <Col md={4}>
                <h5><><i className="bi bi-person-check-fill me-2"></i></>Follow Us</h5>
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="https://facebook.com" className="text-light"><><i className="bi bi-messenger"></i></>Facebook</a></li>
                  <li className="list-inline-item"><a href="https://twitter.com" className="text-light"><><i className="bi bi-twitter"></i></>Twitter</a></li>
                  <li className="list-inline-item"><a href="https://instagram.com" className="text-light"><><i className="bi bi-instagram"></i></>Instagram</a></li>
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
      </Container>
    </>
  );
};

export default Viewnews;
