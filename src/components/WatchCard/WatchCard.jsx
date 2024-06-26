import { PATHS } from '@/constant/path';
import { Card, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';

const WatchCard = ({ watch }) => {
  return (
    <Link to={PATHS.MEMBER.HOME_PAGE + '/' + watch._id}>
      <Card
        hoverable
        cover={<img alt={watch.watchName} src={watch.image} />}
      >
        <Tooltip placement="top" title={watch.watchName}>
          <Typography.Text>{watch.watchName}</Typography.Text>
        </Tooltip>

        <Card.Meta description={watch.watchDescription} />
        <p>{watch.price}</p>
      </Card>
    </Link>
  );
};

export default WatchCard;
