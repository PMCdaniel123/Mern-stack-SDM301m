import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { queryClient } from '@/constant/storage';
import MembersManagementListAPI from '@/services/membersService';

const useUpdatePassword = () => {


  return useMutation({
    mutationFn: MembersManagementListAPI.UpdatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['updatePassword'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update password successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Update password failed',
        description: error.message,
      });
    },
  });
};

export default useUpdatePassword;
