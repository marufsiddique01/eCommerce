import React from 'react';
import Products from '../products';
import { Row, Col } from 'react-bootstrap';
import ProductScreen from './ProductScreen';

const HomeScreen = () => {
  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col>
            <ProductScreen Products={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
