import { Controller, useForm } from 'react-hook-form';
import { Button, Input } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  FieldTimeOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { validatePassword } from '@/constant/validate';
import React from 'react';
import ConfigAntdButton from '../../components/Button/ConfigAntdButton';
import useRegister from './useRegister';

const Register = () => {
  const register = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    register.mutate({
      membername: data.membername,
      password: data.password,
      name: data.name,
      YOB: data.YOB,
    });
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen bg-cover bg-center">
      <div className="p-10 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-5 text-white">
          REGISTER
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Controller
              name="membername"
              control={control}
              defaultValue=""
              rules={{ required: 'Member name is required' }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Member name"
                  className="p-2 rounded-lg w-full"
                />
              )}
            />
            {errors.membername && (
              <p className="text-red-500">{errors.membername.message}</p>
            )}
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: 'Password is required',
                validate: validatePassword,
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  className="p-2 rounded-lg w-full"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<SkinOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                  className="p-2 rounded-lg w-full"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Controller
              name="YOB"
              control={control}
              defaultValue=""
              rules={{
                required: 'Year of birth is required',
                validate: (value) =>
                  (value >= 1964 && value <= 2009) ||
                  'Year of birth must be between 1964 and 2009',
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<FieldTimeOutlined className="site-form-item-icon" />}
                  placeholder="Year of birth"
                  className="p-2 rounded-lg w-full"
                />
              )}
            />
            {errors.YOB && <p className="text-red-500">{errors.YOB.message}</p>}
          </div>
          <div>
            <ConfigAntdButton>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full font-semibold h-[45px] text-[16px] rounded-lg"
              >
                Register
              </Button>
            </ConfigAntdButton>
            <div className="text-center mt-2 text-white">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                LOGIN
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
