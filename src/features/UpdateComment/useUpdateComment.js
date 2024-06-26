import { queryClient } from '@/constant/storage';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import MembersManagementListAPI from '@/services/membersService';
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/reducers/popupReducer';

const useUpdateComment = () => {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: MembersManagementListAPI.UpdateComment,
    onSuccess: () => {
      dispatch(closePopup('Update Comment'));
      queryClient.invalidateQueries({ queryKey: ['getWatchById'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update a comment successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Failed',
        description: error.message,
      });
    },
  });
};

export default useUpdateComment;
