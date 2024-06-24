import MembersManagementListAPI from '@/services/membersService';
import { useQuery } from '@tanstack/react-query';

const useGetMemberInfor = () => {
    return useQuery({
        queryKey: ['getProfile'],
        queryFn: () =>
           MembersManagementListAPI.GetMemberInfo
    });
};

export default useGetMemberInfor;
