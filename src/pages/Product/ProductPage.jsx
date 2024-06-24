import React from 'react';
import { Card, Row, Col } from 'antd'; 
import useGetWatchesList from './useGetProductList';

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    price: '$100',
    imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GS/GST/gst-b100gb-1a9/assets/GST-B100GB-1A9.png.transform/main-visual-pc/image.png',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is product 2',
    price: '$200',
    imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GS/GST/gst-b100gb-1a9/assets/GST-B100GB-1A9.png.transform/main-visual-pc/image.png',
  },
  
];


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

// ProductPage component
const ProductPage = () => {
  const { data } = useGetWatchesList();
  console.log(data.map((item) => item.watchName));
  console.log(data.map((item) => item.price));
  console.log(data.map((item) => item.image));
    console.log(data.map((item) => item._id));
 

 

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;