import React from 'react';
import { Card, Row, Col } from 'antd';
import useGetWatchesList from './useGetProductList';
import './Product.css';
const ProductCard = ({ product }) => (
  <Card
    hoverable
    style={{ width: 240, margin: '10px' }}
    cover={<img alt={product.name} src={product.imageUrl} />}
  >
    <Card.Meta title={product.name} description={product.description} />
    <p>{product.price}</p>
  </Card>
);

const ProductPage = () => {
  const { data, isLoading } = useGetWatchesList();

  if (isLoading) return <div>Loading...</div>;

  const products = data.map((item) => ({
    id: item._id, // Assuming _id is unique
    name: item.watchName,
    description: item.watchDescription,
    price: item.price,
    imageUrl: item.image,
  }));

  return (
    <div style={{ padding: '20px' }}>
      <div className="card-container">
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductPage;
