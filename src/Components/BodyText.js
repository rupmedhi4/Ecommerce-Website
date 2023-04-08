import React from 'react';
import { Container } from 'react-bootstrap';

export default function BodyText() {
  const headingStyle = {
    fontFamily: 'Bold',
    textAlign: 'center'
  };

  return (
    <Container className='mt-5'>
      <h2 style={headingStyle} >MUSIC</h2>
    </Container>
  )
}
