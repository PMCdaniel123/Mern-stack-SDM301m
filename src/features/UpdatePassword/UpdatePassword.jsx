import { useForm, Controller } from 'react-hook-form';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/reducers/popupReducer';
import { validatePassword } from '@/constant/validate';
import React from 'react';
import useUpdatePassword from './useUpdatePassword';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';

const UpdatePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const updatePassword = useUpdatePassword();

  const onSubmit = (data) => {
    updatePassword.mutate({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
      confirmNewPassword: data.confirmNewPassword,
    });
  };

  const dispatch = useDispatch();

  const handleCancel = () => {
    reset();
    dispatch(closePopup('Update Password'));
  };

  const newPassword = watch('newPassword');

  return (
    <div className="px-6 py-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="m-4">
          <label htmlFor="currentPassword">Current password</label>
          <Controller
            name="currentPassword"
            control={control}
            defaultValue=""
            rules={{
              required: 'Current password is required',
            }}
            render={({ field }) => (
              <Input
                {...field}
                className="p-2"
                id="currentPassword"
                type="password"
                placeholder="Current password..."
              />
            )}
          />
          {errors.currentPassword && (
            <p className="text-red-500">{errors.currentPassword.message}</p>
          )}
        </div>
        <div className="m-4">
          <label htmlFor="newPassword">New password</label>
          <Controller
            name="newPassword"
            control={control}
            defaultValue=""
            rules={{
              required: 'Password is required',
              validate: validatePassword,
            }}
            render={({ field }) => (
              <Input
                {...field}
                className="p-2"
                id="newPassword"
                type="password"
                placeholder="New password..."
              />
            )}
          />
          {errors.newPassword && (
            <p className="text-red-500">{errors.newPassword.message}</p>
          )}
        </div>
        <div className="m-4">
          <label htmlFor="confirmNewPassword">Confirm new password</label>
          <Controller
            name="confirmNewPassword"
            control={control}
            defaultValue=""
            rules={{
              required: 'Please confirm your new password',
              validate: (value) =>
                value === newPassword || 'Confirm password do not match',
            }}
            render={({ field }) => (
              <Input
                {...field}
                className="p-2"
                id="confirmNewPassword"
                type="password"
                placeholder="Confirm new password..."
              />
            )}
          />
          {errors.confirmNewPassword && (
            <p className="text-red-500">{errors.confirmNewPassword.message}</p>
          )}
        </div>
        <div className="flex flex-row gap-1 justify-center p-4">
          <ConfigAntdButton type="danger">
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </ConfigAntdButton>
          <ConfigAntdButton>
            <Button type="primary" onClick={handleSubmit(onSubmit)}>
              Update
            </Button>
          </ConfigAntdButton>
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;
