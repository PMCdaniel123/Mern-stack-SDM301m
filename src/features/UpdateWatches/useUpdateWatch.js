import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import WatchesManagementListAPI from '@/services/watchesService';
import { queryClient } from '@/constant/storage';
import { closePopup } from '@/store/reducers/popupReducer';

const useUpdateWatch = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: WatchesManagementListAPI.UpdateWatches,
    onSuccess: () => {
      dispatch(closePopup('Update Watch'));
      queryClient.invalidateQueries({ queryKey: ['getWatchesList'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update Watch successfully',
        duration: 2,
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Update failed',
        description: error.message,
        duration: 2,
      });
    },
  });
};

export default useUpdateWatch;
