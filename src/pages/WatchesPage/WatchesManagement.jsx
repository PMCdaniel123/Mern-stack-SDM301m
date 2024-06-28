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
    <div
      style={{
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div className="bg-white w-full flex items-center p-4 mt-1 rounded-lg shadow-sm">
        <Typography.Title level={3} type="secondary">
          WATCHES MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
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
          bordered
          pagination={{ pageSize: 5 }}
          style={{ backgroundColor: '#fff' }}
        />
      </div>
    </div>
  );
};

export default WatchesManagement;
