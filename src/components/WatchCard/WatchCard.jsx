import { PATHS } from '@/constant/path';
import { Card, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';

const WatchCard = ({ watch }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
        margin: '10px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        border: watch.Automatic ? '2px solid #22c55e' : 'none',
      }}
      cover={
        <img
          alt={watch.watchName}
          src={watch.image}
          style={{ height: '180px', objectFit: 'cover' }}
        />
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <Link to={PATHS.MEMBER.HOME_PAGE + '/' + watch._id}>
        <Tooltip placement="top" title={watch.watchName}>
          <Typography.Title level={4} ellipsis={{ rows: 1 }}>
            {watch.watchName}
          </Typography.Title>
        </Tooltip>

        <Typography.Text className="text-gray-900 opacity-60 pt-1 mb-4">
          @{watch.brand.brandName}
        </Typography.Text>

        <Typography.Text
          strong
          style={{ display: 'block', marginTop: '8px', color: '#000' }}
        >
          ${watch.price}
        </Typography.Text>
      </Link>
    </Card>
  );
};

export default WatchCard;
