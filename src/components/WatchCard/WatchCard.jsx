import { PATHS } from '@/constant/path';
import { Card, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './watch-card.css';

const WatchCard = ({ watch }) => {
  return (
    <Link to={PATHS.MEMBER.HOME_PAGE + '/' + watch._id}>
      <Card hoverable cover={<img alt={watch.watchName} src={watch.image} />}>
        <Tooltip placement="top" title={watch.watchName}>
          <Typography.Text className="text-[14px] font-semibold">
            {watch.watchName}
          </Typography.Text>
        </Tooltip>
        <Card.Meta
          className="!text-[14px] !mt-3"
          description={watch.watchDescription}
        />
        <p className="text-[14px] font-semibold mt-3">${watch.price}</p>
      </Card>
    </Link>
  );
};

export default WatchCard;
