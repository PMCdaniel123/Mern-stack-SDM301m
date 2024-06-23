import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import BrandsManagementListAPI from '@/services/brandsService';

export const useDeleteBrand = (id) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => BrandsManagementListAPI.DeleteBrands(id),
    onSuccess: () => {
      dispatch(closePopup('Delete Brand'));
      queryClient.invalidateQueries({ queryKey: ['getBrandsList'] });
      notification.success({
        message: 'Delete successfully',
        description: 'Delete a Brand successfully',
      });
    },
    onError: () => {
      notification.error({
        message: 'Delete failed',
        description: 'Delete a Brand failed',
      });
    },
  });
};
