import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import FooterBtn from './FooterBtn';

export default function Footer() {
  return (
    <Container fluid className="bg-primary display-5 py-3 d-flex ">
      <Row>
        <Col className='mx-5 '>
          <strong className="text-white font-weight-bold" style={{marginLeft:"10rem"}}>The Generics</strong>
        </Col>
      </Row>
      <FooterBtn />
    </Container>
  );
}
