import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import './navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row
} from 'reactstrap';



class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="navigation">
      <Row>

        <Navbar color="light" light expand="md" fixed="top">
          <NavbarBrand href="/">Gerson Cruz</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#work">Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Links
                  </DropdownToggle>
                <DropdownMenu right>
                  <a href="https://www.linkedin.com/in/gerson-cruz-11719316a/">
                    <DropdownItem>
                      LinkedIn
                    </DropdownItem>
                  </a>
                  <a href="https://github.com/gersonc11">
                    <DropdownItem>
                      Github
                    </DropdownItem>
                  </a>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Row>
      </div>
    );
  }
}

export default Navigation;