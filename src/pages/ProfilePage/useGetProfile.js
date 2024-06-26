import MembersManagementListAPI from '@/services/membersService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetMemberInfor = () => {
  const token = useSelector((state) => state.auth.token);
  return useQuery({
    queryKey: ['getProfile', token],
    queryFn: () => MembersManagementListAPI.GetMemberInfo(),
    enabled: !!token,
  });
};

export default useGetMemberInfor;
