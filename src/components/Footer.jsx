import { Nav, NavItem, NavbarBrand, Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";
import FooterLogo from "../assets/Footer-logo.png";

const Footer = () => {
  return (
    <div className="footer-wrapper mt-5 py-4">
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-top"
          >
            <NavbarBrand href="/">
              <img
                src={FooterLogo}
                alt="Sabores Latino Logo"
                className="footer-logo"
              />
            </NavbarBrand>
          </Col>

          <Col xs={12} md={4}>
            <h4 className="fs-2 text-center footer-title">Navigation</h4>
            <Nav className="d-flex justify-content-center align-items-center text-center mt-3">
              <div>
                <NavItem>
                  <NavLink to="/appetizers" className="nav-link footer-link">
                    Appetizers
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/dishes" className="nav-link footer-link">
                    Dishes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/desserts" className="nav-link footer-link">
                    Desserts
                  </NavLink>
                </NavItem>
              </div>
              <div>
                <NavItem>
                  <NavLink to="/drinks" className="nav-link footer-link">
                    Drinks
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/texmex" className="nav-link footer-link">
                    TexMex
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Col>
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <h4 className="fs-2 footer-title">Follow us : </h4>
            <div className="d-flex justify-content-center align-items-center fs-2 gap-4 mt-3">
              <a href="/" className="footer-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/" className="footer-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" className="footer-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
