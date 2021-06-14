import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
} from 'react-bootstrap';

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const req = await axios.get(
        `http://localhost:8080/products/${match.params.id}`
      );
      setProduct(req.data);
    };
    fetchProduct();
  }, [match]);

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        <i class='fas fa-arrow-left'></i> &nbsp; GO BACK
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : $ {product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status:</Col>
              <Col>
                {product.countInStock > 0 ? 'In Stock' : 'Out of stock'}
              </Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Button className='btn-block' type='button'>
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
