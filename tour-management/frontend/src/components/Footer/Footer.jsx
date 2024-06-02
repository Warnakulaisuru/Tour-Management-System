import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const quick__links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>
                Lanka is the place where you can revive yourself with full of adventures, discoveries and authentic travel experiences you have never experienced before.
              </p>
              <div className='social__links d-flex align-items-center gap-4'>
                <span>
                  <Link to='#'>
                    <i className="ri-wechat-fill social-icon"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className="ri-facebook-circle-fill social-icon"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className="ri-whatsapp-fill social-icon"></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className="ri-mv-fill social-icon"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title px-5'>Discover</h5>
            <ListGroup className='footer__quick-links px-5'>
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6>
                  <span style={{ marginRight: '10px' }}>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Mirigama,<br/>Sri Lanka(11200).</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6>
                  <span style={{ marginRight: '10px' }}>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className='mb-0'>madhushandisanayake@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6>
                  <span style={{ marginRight: '10px' }}>
                    <i className="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>
                <p className='mb-0'>+94 77 694 9630</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>Copyright {year}, design and develop by @WARNAKULAISURU. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
