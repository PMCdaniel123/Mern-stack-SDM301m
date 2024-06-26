import { Row, Col, Skeleton, Empty } from 'antd';
import React from 'react';
import WatchCard from '@/components/WatchCard/WatchCard';
import useGetWatchesList from '../WatchesPage/useGetWatchesList';
import './Product.css';
import WatchSearchBar from '@/components/SearchBar/Search-bar-watches';
import styled from 'styled-components';

const ProductSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 5%;
`;

const ProductPage = () => {
  const { data, isLoading, isError } = useGetWatchesList();

  if ((!isLoading && data?.length < 1) || isError)
    return (
      <div className="products mb-3">
        <Empty description={'There is no products'} />
      </div>
    );

  if (isLoading) {
    return (
      <div className="products mb-3">
        <div className="grid gap-5">
          {new Array(8).fill('').map((_, index) => {
            return (
              <ProductSkeletonStyle key={index}>
                <Skeleton.Image active style={{ width: '100%', height: 275 }} />
                <Skeleton.Input />
                <Skeleton.Input block />
              </ProductSkeletonStyle>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <WatchSearchBar />
      <div className="card-container">
        <Row gutter={[16, 16]}>
          {data.map((watch) => (
            <Col key={watch._id} xs={24} sm={12} md={8} lg={6}>
              <WatchCard watch={watch} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductPage;
