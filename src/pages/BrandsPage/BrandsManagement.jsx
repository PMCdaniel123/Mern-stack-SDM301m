import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Table, Typography } from 'antd';
import { BrandsColumn } from '@/constant/table-column';
import useGetBrandsList from './useGetBrandsList';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import Popup from '@/components/Popup/Popup';
import AddBrands from '@/features/AddBrands/AddBrands';
import { useState } from 'react';

const BrandsManagement = () => {
  const { data } = useGetBrandsList();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: data ? data.length : 0,
  });

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          BRANDS MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
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
          tableLayout="auto"
          columns={BrandsColumn}
          dataSource={data}
          pagination={{
            ...pagination,
            position: ['bottomCenter'],
            showSizeChanger: false,
          }}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default BrandsManagement;
