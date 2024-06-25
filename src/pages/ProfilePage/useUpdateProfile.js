import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { queryClient } from '@/constant/storage';
import MembersManagementListAPI from '@/services/membersService';

const useUpdateProfile = () => {


  return useMutation({
    mutationFn: MembersManagementListAPI.UpdateMemberInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['updateProfile'] });
      notification.success({
        message: 'Update successfully',
        description: 'Update profile successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Update failed',
        description: error.message,
      });
    },
  });
};

export default useUpdateProfile;
