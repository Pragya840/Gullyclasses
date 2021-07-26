import React from 'react'
import logo from "../assets/Image/logo.png"
import './Header.css'
import { Container, Navbar, Nav, NavDropdown, Row,Image, Col} from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar className="color-nav" variant="dark" expand="lg" collapseOnSelect>
  <Container>
  
  <Row id="logo">
    <Col xs={6} md={4}>
      <Image src={logo} alt="gullyclasses.com" />
    </Col>
    
  </Row>
    <Navbar.Brand href="#home" className="black">GULLY CLASSES FOUNDATION</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" className="black">Home</Nav.Link>
        <Nav.Link href="#aboutus" className="black">About</Nav.Link>
        <Nav.Link href="#services" className="black">Services</Nav.Link>
        <NavDropdown title="More Info" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" className="black">Our Team </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className="black">Partnership</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className="black">Gallery</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="black">Carrier</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" className="black">Join Us</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4" className="black">Fund Raise</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
      <Nav.Link href="#contactus" className="black">Contact Us</Nav.Link>
      <Nav.Link eventKey={2} href="#email" className="black"> Email Us </Nav.Link> 
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
