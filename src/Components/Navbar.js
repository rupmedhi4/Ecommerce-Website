import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

export default function TopNavigation() {
  return (
    <>
      <Navbar bg="black" expand="sm" variant="dark">      
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home" variant="light" className="mx-5">Home</Nav.Link>
            <Nav.Link href="#features" variant="light" className="mx-5">STORE</Nav.Link>
            <Nav.Link href="#pricing" variant="light">ABOUT</Nav.Link>
          </Nav>
          <Button variant="outline-light" className="bg-black">Cart 0</Button>
        </Container>
      </Navbar>
      <div className="bg-primary text-center pb-5" >
        
          <h1 className='display-1 text-white '>The Generics</h1>
        

        
      </div>
    </>
  );
}
