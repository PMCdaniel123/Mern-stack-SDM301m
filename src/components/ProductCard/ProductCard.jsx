import React from 'react';
import { Card } from 'antd';
const ProductCard = (product) => {
  return (
    <Card
      hoverable
      cover={<img alt={product.name} src={product.imageUrl} />}
    >
      <Card.Meta title={product.name} description={product.description} />
      <p>{product.price}</p>
    </Card>
  );
};
export default ProductCard;
