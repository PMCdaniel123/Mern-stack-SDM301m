import React from 'react';
import { Card } from 'antd';
export default function ProductCard(product) {
  return (
<Card
      hoverable
      style={{ width: 240, margin: '10px' }}
      cover={<img alt={product.name} src={product.imageUrl} />}
    >
      <Card.Meta title={product.name} description={product.description} />
      <p>{product.price}</p>
    </Card>
  );
}
