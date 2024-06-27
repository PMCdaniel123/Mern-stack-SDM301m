import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { queryClient } from '@/constant/storage';
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/reducers/popupReducer';
import MembersManagementListAPI from '@/services/membersService';

const useUpdatePassword = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: MembersManagementListAPI.UpdatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['updatePassword'] });
      dispatch(closePopup('Update Password'));
      notification.success({
        message: 'Update successfully',
        description: 'Update password successfully',
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

export default useUpdatePassword;
