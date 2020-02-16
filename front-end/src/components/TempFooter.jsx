import React from 'react';
import {Navbar, Container, Row, Col, UncontrolledTooltip, Button, NavLink, NavItem, Nav } from 'reactstrap';
import { Link } from "react-router-dom";

function TempFooter() {
    return (
        <div>
            
            <Container>
            <footer className="footer"> 
                <Row>
                    <Col>
                    <h1 className="title">Property Consultancy•</h1>
                    </Col>
                    <Col>
                    <Nav>
                        <NavItem>
                        
                        <NavLink to="/" tag={Link}>
                            Home
                        </NavLink>
                        
                        <NavLink to="/Login" tag={Link}>
                            Login
                        </NavLink>
                        
                        <NavLink to="/Register" tag={Link}>
                            Register
                        </NavLink>
                        
                        <NavLink to="/PropertyDetail" tag={Link}>
                            Properties
                        </NavLink>

                        </NavItem>
                    </Nav>
                    </Col>
                    <Col>
                    <Nav>
                        <NavItem>
                        <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                            Contact Us
                        </NavLink>
                        
                        <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
                            About Us
                        </NavLink>
                        
                        <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer">
                            Blog
                        </NavLink>
                        
                        <NavLink href="https://opensource.org/licenses/MIT">
                            License
                        </NavLink>
                        </NavItem>
                    </Nav>
                    </Col>
                    <Col>
                    <h3 className="title">Follow us:</h3>
                    <div className="btn-wrapper profile">
                        <Button
                        className="btn-icon btn-neutral btn-round btn-simple"
                        color="default"
                        href="https://twitter.com/creativetim"
                        id="tooltip622135962"
                        target="_blank"
                        >
                        <i className="fab fa-twitter" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip622135962">
                        Follow us
                        </UncontrolledTooltip>
                        <Button
                        className="btn-icon btn-neutral btn-round btn-simple"
                        color="default"
                        href="https://www.facebook.com/creativetim"
                        id="tooltip230450801"
                        target="_blank"
                        >
                        <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip230450801">
                        Like us
                        </UncontrolledTooltip>
                        <Button
                        className="btn-icon btn-neutral btn-round btn-simple"
                        color="default"
                        href="https://dribbble.com/creativetim"
                        id="tooltip318450378"
                        target="_blank"
                        >
                        <i className="fab fa-dribbble" />
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltip318450378">
                        Follow us
                        </UncontrolledTooltip>
                    </div>
                    </Col>
                </Row>
               
      </footer>
      
      </Container>
        </div>
        
    )
}

export default TempFooter;
