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
    <div>
      <div className="bg-primary w-full flex items-center p-4 mt-1">
        <Typography.Title level={3} type="secondary">
          MEMBERS MANAGEMENT
        </Typography.Title>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Table columns={MembersColumn} dataSource={onlyMembersData} />
      </div>
    </div>
  );
};

export default MembersManagement;
