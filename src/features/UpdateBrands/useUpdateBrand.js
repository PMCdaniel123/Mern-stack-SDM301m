import { queryClient } from '@/constant/storage';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import BrandsManagementListAPI from '@/services/brandsService';

const useUpdateBrand = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: BrandsManagementListAPI.UpdateBrands,
    onSuccess: () => {
      dispatch(closePopup('Update Brand'));
      queryClient.invalidateQueries({ queryKey: ['getBrandsList'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update Brand successfully',
        duration: 1.5,
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Update failed',
        description: error.message,
        duration: 1.5,
      });
    },
  });
};

export default useUpdateBrand;
