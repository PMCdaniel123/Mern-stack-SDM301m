import { queryClient } from '@/constant/storage';
import MembersManagementListAPI from '@/services/membersService';
import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';

const useAddComment = () => {
  return useMutation({
    mutationFn: MembersManagementListAPI.AddComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getWatchById'] });
      notification.success({
        message: 'Comment successfully',
        description: 'Post a new comment successfully',
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

export default useAddComment;
