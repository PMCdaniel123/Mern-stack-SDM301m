import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  FieldTimeOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import ConfigAntdButton from '../components/Button/ConfigAntdButton';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/watches.jpg')" }}
    >
      <div className="p-10 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-5 text-white">
          REGISTER
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Member name"
              className="p-2 w-full"
              {...register('membername', {
                required: 'Member name is required',
              })}
            />
            {errors.membername && (
              <p className="text-red-500">{errors.membername.message}</p>
            )}
          </div>
          <div>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="p-2 w-full"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <Input
              prefix={<SkinOutlined className="site-form-item-icon" />}
              placeholder="Name"
              className="p-2 w-full"
              {...register('name', {
                required: 'Name is required',
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              prefix={<FieldTimeOutlined className="site-form-item-icon" />}
              placeholder="Year of birth"
              className="p-2 w-full"
              {...register('YOB', {
                required: 'Year of birth is required',
              })}
            />
            {errors.YOB && <p className="text-red-500">{errors.YOB.message}</p>}
          </div>
          <div>
            <ConfigAntdButton>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full font-semibold h-[45px] text-[16px] "
              >
                Register
              </Button>
            </ConfigAntdButton>
            <div className="text-center mt-2 text-white">
              Already have an account?{' '}
              <a href="/login" className="text-gray-400">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
