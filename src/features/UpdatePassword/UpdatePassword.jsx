import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useUpdatePassword from './useUpdatePassword';
import { Modal, Button, Input } from 'antd'; 
import { EyeInvisibleFilled } from '@ant-design/icons';


const schema = yup.object({
  currentPassword: yup.string().required('Current password is required'),
  newPassword: yup.string().min(8, 'Password must be at least 8 characters long').required('New password is required'),
  confirmNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match').required('Please confirm your new password'),
}).required();

const UpdatePassword = () => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema), 
  });
  const updatePassword = useUpdatePassword();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (data) => {
    updatePassword.mutate({ 
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      confirmNewPassword: data.confirmNewPassword
    });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const newPassword = watch('newPassword');

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Update Password
      </Button>
      <Modal title="Update Password" visible={isModalVisible} onOk={handleSubmit(handleOk)} onCancel={handleCancel}>
        <form onSubmit={handleSubmit(handleOk)}>
       
          <div>
            <label htmlFor="currentPassword">Current Password:</label>
            <Controller
              name="currentPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="currentPassword"
                  type={showCurrentPassword ? 'text' : 'password'}
                  suffix={
                    <EyeInvisibleFilled
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    />
                  }
                />
              )}
            />
            {errors.currentPassword && <p className='text-red-500'>{errors.currentPassword.message}</p>}
          </div>
         
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  suffix={
                    <EyeInvisibleFilled
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    />
                  }
                />
              )}
            />
            {errors.newPassword && <p className='text-red-500'>{errors.newPassword.message}</p>}
          </div>
          
          <div>
            <label htmlFor="confirmNewPassword">Confirm New Password:</label>
            <Controller
              name="confirmNewPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="confirmNewPassword"
                  type={showConfirmNewPassword ? 'text' : 'password'}
                  suffix={
                    <EyeInvisibleFilled
                      onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                    />
                  }
                />
              )}
            />
            {errors.confirmNewPassword && <p className='text-red-500'>{errors.confirmNewPassword.message}</p>}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdatePassword;