import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Hero from '../component/Hero';
import Movies from '../component/Products';
import NavbarComponent from '../component/Navbar';

const Home = () => {
  return (
    <>
    <NavbarComponent/>
      <Container>
      <Hero />
      <Row>
        <Col>
          <Movies />
        </Col>
      </Row>
    </Container>
    </>
  
  );
};

export default Home;
