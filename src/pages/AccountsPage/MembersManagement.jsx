import { Table, Typography } from 'antd';
import SearchBar from '@/components/SearchBar/Search-bar-watches';
import { MembersColumn } from '@/constant/table-column';
import useGetMembersList from './useGetMembersList';
import { useState } from 'react';
import ComponentLoading from '@/components/ComponentLoading/ComponentLoading';

const MembersManagement = () => {
  const { data, isLoading } = useGetMembersList();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: data ? data.length : 0,
  });

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  if (isLoading) return <ComponentLoading />;
  const onlyMembersData = data.filter((member) => !member.isAdmin);

  return (
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          MEMBERS MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Table
          columns={MembersColumn}
          dataSource={onlyMembersData}
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

export default MembersManagement;
