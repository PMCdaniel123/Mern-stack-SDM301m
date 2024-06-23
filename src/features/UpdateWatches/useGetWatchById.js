import WatchesManagementListAPI from '@/services/watchesService';
import { useQuery } from '@tanstack/react-query';

export const useGetWatchById = (id) => {
  return useQuery({
    queryKey: ['getWatchById', id],
    queryFn: () => WatchesManagementListAPI.GetWatchById(id),
  });
};
