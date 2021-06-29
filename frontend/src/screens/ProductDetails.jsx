import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Form,
} from 'react-bootstrap';

const ProductDetails = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
    // const fetchProduct = async () => {
    //   const { data } = await axios.get(
    //     `http://localhost:8080/api/products/${match.params.id}`
    //   );
    //   setProduct(data);
    // };
    // fetchProduct();
  }, [dispatch, match]);

  const addToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

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

          {product.countInStock > 0 && (
            <ListGroupItem>
              <Row>
                <Col>Quantity</Col>
                <Form.Control
                  as='select'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Row>
            </ListGroupItem>
          )}

          <ListGroupItem>
            <Button className='btn-block' type='button' onClick={addToCart}>
              Add to cart
            </Button>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
