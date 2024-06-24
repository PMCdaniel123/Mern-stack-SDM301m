import MembersManagementListAPI from '@/services/membersService';
import { useQuery } from '@tanstack/react-query';

export const useGetMemberInfo = () => {
  return useQuery({
    queryKey: ['getMember'],
    queryFn: () => MembersManagementListAPI.GetMemberInfo(),
  });
};
