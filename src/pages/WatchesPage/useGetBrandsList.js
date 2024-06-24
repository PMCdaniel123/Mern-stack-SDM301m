import WatchesManagementListAPI from '@/services/watchesService';
import { useQuery } from '@tanstack/react-query';

const useGetWatchesList = () => {
    return useQuery({
        queryKey: ['getWatchesList'],
        queryFn: () =>
            WatchesManagementListAPI.GetWatchesList()
    });
};

export default useGetWatchesList;
