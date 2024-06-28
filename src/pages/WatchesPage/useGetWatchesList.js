import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import WatchesManagementListAPI from '@/services/watchesService';

const useGetWatchesList = () => {
  const searchValue = useSelector((state) => state.watch.searchValue);
  const filters = useSelector((state) => state.watch.brandNames).join('-');
  return useQuery({
    queryKey: ['getWatchesList', searchValue, filters],
    queryFn: () =>
      WatchesManagementListAPI.GetWatchesList({
        brandNames: filters,
        value: searchValue,
      }),
  });
};

export default useGetWatchesList;
