import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import MembersManagementListAPI from '@/services/membersService';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/constant/path';

const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: MembersManagementListAPI.Register,
    onSuccess: () => {
      navigate(PATHS.LOGIN);
      notification.success({
        message: 'Register successfully',
        description: 'Register successfully',
      });
    },
    onError: (error) => {
      notification.error({
        message: 'Register failed',
        description: error.message,
      });
    },
  });
};

export default useRegister;
