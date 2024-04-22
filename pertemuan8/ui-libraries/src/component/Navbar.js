import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = ({ className, expand, ...args }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      {...args}
      expand="md"
      className={`bg-primary navbar-dark ${className}`}
    >
      <NavbarBrand tag="a" href="/">
        Jual in
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavLink className="nav-link pe-2" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link pe-2" to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink className="nav-link pe-2" to="/top">
            Courses
          </NavLink>
        </Nav>
        <NavLink to={"/login"}>
          <button className="button is-light">Login</button>
        </NavLink>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
