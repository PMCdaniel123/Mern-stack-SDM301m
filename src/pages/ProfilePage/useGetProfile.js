import MembersManagementListAPI from '@/services/membersService';
import WatchesManagementListAPI from '@/services/watchesService';
import { useQuery } from '@tanstack/react-query';

const useGetProfile = () => {
    return useQuery({
        queryKey: ['getProfile'],
        queryFn: () =>
           MembersManagementListAPI.GetMemberProfile()
    });
};

export default useGetProfile;
