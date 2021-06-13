import React from 'react';
import { Card } from 'react-bootstrap';

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
        </Card.Body>
        <Card.Text>
          <div className='my 3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as='div'>$ {product.price}</Card.Text>
      </Card>
    </>
  );
};

export default ProductScreen;
