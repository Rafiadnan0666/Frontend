import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={8} className="text-md-left">
          <h2 className="text-primary">Title</h2>
          <h3 className="text-primary">Genre :</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            fuga odit sed nihil. Est doloremque saepe dolor voluptatum enim
            autem doloribus. Sequi quam vero laborum tempora, enim aut quae
            fugit.
          </p>
          <Button>Primary</Button>
        </Col>
        <Col md={4}>
            <img src="https://picsum.photos/300/200" alt="hero-img"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
