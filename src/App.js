import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Navbar, Nav, Container,  Card, Row, Col } from 'react-bootstrap';


function App() {

  const titles = ["Nuts Square", "Tray", "Forks/Spoons"];
  const images = ["/fpic.jpg", "/Tray.jpg", "Forkspoons.jpg"];

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Emsekoelkhashab</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">products</Nav.Link>
              <Nav.Link href="#pricing">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br>
      </br>
      
      <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={images[idx]} />
                
                <Card.Body>
                  <Card.Title>{titles[idx]}</Card.Title>
                  
                  <Card.Text>
                    Click for more details
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </div>
  );
}

export default App;
