import { queryClient } from '@/constant/storage';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import BrandsManagementListAPI from '@/services/brandsService';

const useAddBrands = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: BrandsManagementListAPI.CreateBrands,
    onSuccess: () => {
      dispatch(closePopup('Create a new brand'));
      queryClient.invalidateQueries({ queryKey: ['getBrandsList'] });
      notification.success({
        message: 'Create successfully',
        description: 'Create a new brand successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Create failed',
        description: 'Create a new brand failed',
      });
    },
  });
};

export default useAddBrands;
