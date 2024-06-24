import MembersManagementListAPI from '@/services/membersService';
import { useQuery } from '@tanstack/react-query';

const useGetMembersList = () => {
  return useQuery({
    queryKey: ['getMembersList'],
    queryFn: () => MembersManagementListAPI.GetMembersList(),
  });
};

export default useGetMembersList;
