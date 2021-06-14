import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import ProductScreen from './ProductScreen';

const HomeScreen = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const req = await axios.get('http://localhost:8080/products');
      setProducts(req.data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Row>
        {Products.map((product) => (
          <Col key={product._id} md={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
