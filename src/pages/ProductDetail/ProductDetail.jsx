import { useGetWatchById } from '@/features/UpdateWatches/useGetWatchById';
import { Card } from 'antd';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { watchId } = useParams();
  const { data: watch, isLoading } = useGetWatchById(watchId);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Card
      hoverable
      style={{ width: 240, margin: '10px' }}
      cover={<img alt={watch.watchName} src={watch.image} />}
    >
      <Card.Meta title={watch.watchName} />
      <Card.Meta description={watch.watchDescription} />
      <p>{watch.price}</p>
    </Card>
  );
};

export default ProductDetail;
