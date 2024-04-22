import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, CardText, ListGroup, ListGroupItem, CardLink, Row } from 'reactstrap';

const products = [
  { id: 1, title: 'product 1', price: '25000' },
  { id: 2, title: 'product 2', price: '25000' },
  { id: 3, title: 'product 3', price: '25000' },
];

const Products = () => (
  <Row>
    {products.map((product) => (
      <NavLink
        key={product.id}
        to="/detail"
        className="col-xs-6 col-sm-4 col-md-3"
      >
        <Card
          color="light"
          className="mb-4"
        >
          <CardImg top width="100%" src="https://picsum.photos/300/200" alt={product.title} />
          <CardBody className="text-center">
            <CardTitle tag="h5">{product.title}</CardTitle>
            <CardText>
              <button color="primary">{product.price}</button>
            </CardText>
          </CardBody>
        </Card>
      </NavLink>
    ))}
  </Row>
);

export default Products;