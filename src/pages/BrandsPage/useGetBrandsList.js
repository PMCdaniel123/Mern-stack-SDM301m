import BrandsManagementListAPI from '@/services/brandsService';
import { useQuery } from '@tanstack/react-query';

const useGetBrandsList = () => {
    return useQuery({
        queryKey: ['getBrandsList'],
        queryFn: () =>
            BrandsManagementListAPI.GetBrandsList()
    });
};

export default useGetBrandsList;
