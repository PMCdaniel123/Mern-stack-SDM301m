import { Table, Typography } from 'antd';
import SearchBar from '@/components/SearchBar/Search-bar-watches';
import { MembersColumn } from '@/constant/table-column';
import useGetMembersList from './useGetMembersList';
import { LoadingOutlined } from '@ant-design/icons';

const MembersManagement = () => {
  const { data, isLoading } = useGetMembersList();

  if (isLoading) return <LoadingOutlined />;
  const onlyMembersData = data.filter((member) => !member.isAdmin);

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
          MEMBERS MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg shadow-sm">
        <div className="flex flex-col gap-4 p-4">
          <Table
            columns={MembersColumn}
            dataSource={onlyMembersData}
            bordered
            pagination={{ pageSize: 5 }}
            style={{ backgroundColor: '#fff' }}
          />
        </div>
      </div>
    </div>
  );
};

export default MembersManagement;
