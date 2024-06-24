import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { WatchesColumn } from '@/constant/table-column';
import SearchBar from '@/components/SearchBar/Search-bar';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import useGetWatchesList from './useGetBrandsList';
import AddWatches from '@/features/AddWatches/AddWatches';

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
          <SearchBar />
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
        <Table columns={WatchesColumn} dataSource={data} />
      </div>
    </div>
  );
};

export default WatchesManagement;
