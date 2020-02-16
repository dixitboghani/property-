import React, { Component } from 'react'
import { Link } from "react-router-dom";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class TempHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                
                <Navbar
                className="navbar-horizontal navbar-dark bg-primary mt-4"
                expand="lg"
                
                >
                 <Container>
                    <NavbarBrand href="/">
                    Property Consultancy
                    </NavbarBrand>
                    <button
                    aria-controls="navbar-primary"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-primary"
                    data-toggle="collapse"
                    id="navbar-primary"
                    type="button"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <UncontrolledCollapse navbar toggler="#navbar-primary">
                    <div className="navbar-collapse-header">
                        <Row>
                        <Col className="collapse-brand" xs="6">
                            <Link to="/">
                            <img
                                alt="..."
                                src={require("../assets/img/brand/blue.png")}
                            />
                            </Link>
                        </Col>
                        <Col className="collapse-close" xs="6">
                            <button
                            aria-controls="navbar-primary"
                            aria-expanded={false}
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-target="#navbar-primary"
                            data-toggle="collapse"
                            id="navbar-primary"
                            type="button"
                            >
                            <span />
                            <span />
                            </button>
                        </Col>
                        </Row>
                    </div>
                    <Nav className="ml-lg-auto" navbar>
                        <NavItem>
                        <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                            Discover <span className="sr-only">(current)</span>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/PropertyDetail">
                            Properties
                        </NavLink>
                        </NavItem>
                        
                        <NavLink href="/Register" >
                            Sign Up
                        </NavLink>
                        <NavLink href="/Login" >
                            Sign in
                        </NavLink>
                        
                    </Nav>
                
                </UncontrolledCollapse>
                </Container>
                </Navbar>

            </div>
        )
    }
}

export default TempHeader
