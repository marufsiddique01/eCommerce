import React from 'react';
import { Card } from 'react-bootstrap';

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <a>
          <Card.Img />
        </a>
      </Card>
    </>
  );
};

export default ProductScreen;
