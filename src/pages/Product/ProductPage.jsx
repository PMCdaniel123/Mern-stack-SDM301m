import { Row, Col } from 'antd';
import React from 'react';
import WatchCard from '@/components/WatchCard/WatchCard';
import useGetWatchesList from '../WatchesPage/useGetWatchesList';

const ProductPage = () => {
  const { data, isLoading } = useGetWatchesList();
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {data.map((watch) => (
          <Col key={watch._id} xs={24} sm={12} md={8} lg={6}>
            <WatchCard watch={watch} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
