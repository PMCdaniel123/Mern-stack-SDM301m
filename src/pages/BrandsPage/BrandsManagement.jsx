import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { BrandsColumn } from '@/constant/table-column';
import useGetBrandsList from './useGetBrandsList';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import AddBrands from '@/features/AddBrands/AddBrands';

const BrandsManagement = () => {
  const { data } = useGetBrandsList();

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
          BRANDS MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
        <div className="flex justify-end items-center">
          <div className="flex">
            <Popup title="Create a new brand" content={<AddBrands />}>
              <ConfigAntdButton>
                <Button type="primary" icon={<PlusCircleOutlined />}>
                  Add new
                </Button>
              </ConfigAntdButton>
            </Popup>
          </div>
        </div>
        <Table
          columns={BrandsColumn}
          dataSource={data}
          bordered
          pagination={{ pageSize: 5 }}
          style={{ backgroundColor: '#fff' }}
        />
      </div>
    </div>
  );
};

export default BrandsManagement;
