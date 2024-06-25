import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { WatchesColumn } from '@/constant/table-column';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import useGetWatchesList from './useGetWatchesList';
import AddWatches from '@/features/AddWatches/AddWatches';
import WatchSearchBar from '@/components/SearchBar/Search-bar-watches';

const WatchesManagement = () => {
  const { data } = useGetWatchesList();

  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          WATCHES MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between items-center">
          <WatchSearchBar />
          <div className="flex">
            <Popup title="Create a new watch" content={<AddWatches />}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Add new
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table
          columns={WatchesColumn}
          dataSource={data}
          scroll={{
            x: 1300,
          }}
        />
      </div>
    </div>
  );
};

export default WatchesManagement;
