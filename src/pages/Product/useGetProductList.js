import WatchesManagementListAPI from '@/services/watchesService';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

const useGetWatchesList = () => {
  const searchValue = useSelector((state) => state.watch.searchValue);
  const filters = useSelector((state) => state.watch.brandNames).join('-');

  return useQuery({
    queryKey: ['getProductsList', searchValue, filters],
    queryFn: () =>
      WatchesManagementListAPI.GetWatchesList({
        brandNames: filters,
        value: searchValue,
      }),
  });
};

export default useGetWatchesList;
