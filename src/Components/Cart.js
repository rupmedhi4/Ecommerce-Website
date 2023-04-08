import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default function Cart(props) {
 
  return (
    <Container className="d-flex justify-content-center mr-5">
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <div className="d-flex justify-content-between ">
            <div>${props.price}</div>
            <Button variant="info">
              <strong className="mt-2">ADD TO CART</strong>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
