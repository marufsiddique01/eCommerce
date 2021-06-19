import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
} from 'react-bootstrap';
const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/products/${match.params.id}`
      );
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        <i class='fas fa-arrow-left    '></i>
        &nbsp; GO BACK
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
                text={`${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? 'In Stock ' : 'out of stock'}
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
