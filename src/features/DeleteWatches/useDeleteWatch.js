import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import WatchesManagementListAPI from '@/services/watchesService';

export const useDeleteWatch = (id) => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: () => WatchesManagementListAPI.DeleteWatches(id),
    onSuccess: () => {
      dispatch(closePopup('Delete Watch'));
      queryClient.invalidateQueries({ queryKey: ['getWatchesList'] });
      notification.success({
        message: 'Delete successfully',
        description: 'Delete a Watch successfully',
        duration: 2,
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Delete failed',
        description: error.message,
        duration: 2,
      });
    },
  });
};
