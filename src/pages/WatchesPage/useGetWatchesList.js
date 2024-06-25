import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import WatchesManagementListAPI from '@/services/watchesService';

const useGetWatchesList = () => {
  const searchValue = useSelector((state) => state.watch.searchValue);
  return useQuery({
    queryKey: ['getWatchesList', searchValue],
    queryFn: () => WatchesManagementListAPI.GetWatchesList(searchValue),
  });
};

export default useGetWatchesList;
