import { notification } from 'antd';
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { closePopup } from '@/store/reducers/popupReducer';
import { queryClient } from '@/constant/storage';
import MembersManagementListAPI from '@/services/membersService';


export const useDeleteWatch = (id) => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: () => MembersManagementListAPI.DeleteComment(id),
    onSuccess: () => {
      dispatch(closePopup('Delete Comment'));
      queryClient.invalidateQueries({ queryKey: [''] });
      notification.success({
        message: 'Delete successfully',
        description: 'Delete comment successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Delete failed',
        description: error.message,
      });
    },
  });
};
