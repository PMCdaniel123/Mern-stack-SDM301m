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
        duration: 2,
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Update password failed',
        description: error.message,
        duration: 2,
      });
    },
  });
};

export default useUpdatePassword;
