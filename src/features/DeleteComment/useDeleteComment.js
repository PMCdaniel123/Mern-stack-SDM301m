import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import MembersManagementListAPI from '@/services/membersService';

export const useDeleteComment = ({ watchId, commentId }) => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: () =>
      MembersManagementListAPI.DeleteComment({ watchId, commentId }),
    onSuccess: () => {
      dispatch(closePopup('Delete Comment'));
      queryClient.invalidateQueries({ queryKey: ['getWatchById'] });
      notification.success({
        message: 'Delete successfully',
        description: 'Delete comment successfully',
        duration: 1.5,
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Delete failed',
        description: error.message,
        duration: 1.5,
      });
    },
  });
};
