import { Row, Col, Empty } from 'antd';
import React from 'react';
import WatchCard from '@/components/WatchCard/WatchCard';
import WatchSearchBar from '@/components/SearchBar/Search-bar-watches';
import { Content } from 'antd/es/layout/layout';
import useGetWatchesList from './useGetProductList';

const ProductPage = () => {
  const { data, isLoading } = useGetWatchesList();

  return (
    <Content
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '36px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
      >
        <div className="flex justify-end items-center mb-6 w-full">
          <WatchSearchBar />
        </div>
        {!isLoading ? (
          <div className="flex justify-center items-center">
            <Row
              gutter={[24, 24]}
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {data.length > 0 ? (
                data.map((watch) => (
                  <Col
                    key={watch._id}
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <WatchCard watch={watch} />
                  </Col>
                ))
              ) : (
                <Empty span={24} />
              )}
            </Row>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Content>
  );
};

export default ProductPage;
