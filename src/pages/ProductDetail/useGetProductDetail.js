import WatchesManagementListAPI from '@/services/watchesService';
import { useQuery } from '@tanstack/react-query';

const useGetProductById = () => {
    return useQuery({
        queryKey: ['getWatchesList'],
        queryFn: () =>
            WatchesManagementListAPI.GetWatchById(id)
    });
};

export default useGetProductById;
