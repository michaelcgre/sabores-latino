import { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../styles/header.css";

const Header = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="header-wrapper">
      <Container>
        <Navbar expand="lg">
          <NavbarBrand href="/">
            <img src={Logo} className="header-logo" alt="Sabores Latino Logo" />
          </NavbarBrand>

          <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ms-auto fs-5 d-flex gap-4" navbar>
              <NavItem className="mx-auto">
                <NavLink to="/appetizers" className="nav-link">
                  Appetizers
                </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                <NavLink to="/dishes" className="nav-link">
                  Dishes
                </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                <NavLink to="/desserts" className="nav-link">
                  Desserts
                </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                <NavLink to="/drinks" className="nav-link">
                  Drinks
                </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                <NavLink to="/texmex" className="nav-link">
                  TexMex
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
