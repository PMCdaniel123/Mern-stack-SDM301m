import { PATHS } from '@/constant/path';
import { Card, Tooltip, Typography } from 'antd';
import { Link } from 'react-router-dom';


const WatchCard = ({ watch }) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: '10px' }}
      cover={<img alt={watch.watchName} src={watch.image} />}
    >
      <Link to={PATHS.MEMBER.HOME_PAGE + '/' + watch._id}>
        <Tooltip placement="top" title={watch.watchName}>
          <Typography.Text>{watch.watchName}</Typography.Text>
        </Tooltip>
      
      <Card.Meta description={watch.watchDescription} />
      <p>{watch.price}</p>
      </Link>
    </Card>
    
  );
};

export default WatchCard;
