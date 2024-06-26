import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import useUpdatePassword from './useUpdatePassword';
import { Modal, Button, Input } from 'antd'; 
import { EyeInvisibleFilled } from '@ant-design/icons';

const UpdatePassword = () => {
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
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
              rules={{ required: "Your current password is required" }}
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
            {errors.currentPassword && <p>{errors.currentPassword.message}</p>}
          </div>
          <div>
            <label htmlFor="newPassword">New Password:</label>
            <Controller
              name="newPassword"
              control={control}
              defaultValue=""
              rules={{ required: "Your new password is required" }}
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
            {errors.newPassword && <p>{errors.newPassword.message}</p>}
          </div>
          <div>
            <label htmlFor="confirmNewPassword">Confirm New Password:</label>
            <Controller
              name="confirmNewPassword"
              control={control}
              defaultValue=""
              rules={{
                required: "Please confirm your new password",
                validate: value =>
                  value === newPassword || "The new password and confirm password do not match"
              }}
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
            {errors.confirmNewPassword && <p>{errors.confirmNewPassword.message}</p>}
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpdatePassword;
