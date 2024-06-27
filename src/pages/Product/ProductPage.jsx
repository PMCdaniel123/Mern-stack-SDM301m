import { Row, Col, Empty } from 'antd';
import React from 'react';
import WatchCard from '@/components/WatchCard/WatchCard';
import useGetWatchesList from '../WatchesPage/useGetWatchesList';
import './Product.css';
import WatchSearchBar from '@/components/SearchBar/Search-bar-watches';
import { Content } from 'antd/es/layout/layout';

const ProductPage = () => {
  const { data, isLoading } = useGetWatchesList();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Content
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', padding: '36px' }}>
        <div className="flex justify-end items-center mb-6">
          <WatchSearchBar />
        </div>
        <div className="card-container">
          <Row>
            {data.length > 0 ? (
              data.map((watch) => (
                <Col key={watch._id} xs={24} sm={12} md={8} lg={6}>
                  <WatchCard watch={watch} />
                </Col>
              ))
            ) : (
              <Empty />
            )}
          </Row>
        </div>
      </div>
    </Content>
  );
};

export default ProductPage;
