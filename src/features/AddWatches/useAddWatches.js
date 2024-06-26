import { queryClient } from '@/constant/storage';
import WatchesManagementListAPI from '@/services/watchesService';
import { closePopup } from '@/store/reducers/popupReducer';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useDispatch } from 'react-redux';

const useAddWatches = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: WatchesManagementListAPI.CreateWatches,
    onSuccess: () => {
      dispatch(closePopup('Create a new watch'));
      queryClient.invalidateQueries({ queryKey: ['getWatchesList'] });
      notification.success({
        message: 'Create successfully',
        description: 'Create a new watch successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Create failed',
        description: error.message,
      });
    },
  });
};

export default useAddWatches;
