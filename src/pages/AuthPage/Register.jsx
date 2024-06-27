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
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '@/hooks/useDebounce';
import ComponentLoading from '@/components/ComponentLoading/ComponentLoading';
import { handleRegister } from '@/store/reducers/authReducer';
import { PATHS } from '@/constant/path';

const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data && !loading.register) {
      try {
        const { membername, name, password, YOB } = data;
        const payload = {
          membername: membername,
          password: password,
          name: name,
          YOB: YOB,
        };
        dispatch(handleRegister(payload));
        navigate(PATHS.MEMBER.HOME_PAGE);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const apiLoading = useDebounce(loading.register, 300);

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center">
      <div className="p-10 bg-white bg-opacity-80 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-5 text-black">
          REGISTER
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {apiLoading && <ComponentLoading />}
          <div>
            <label htmlFor="membername" className="text-base">
              Member Name
            </label>
            <Controller
              name="membername"
              control={control}
              defaultValue=""
              rules={{ required: 'Member name is required' }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="membername"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Member name"
                  className="p-2 w-full bg-gray-100"
                />
              )}
            />
            {errors.membername && (
              <p className="text-red-500">{errors.membername.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="pwd" className="text-base">
              Password
            </label>
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
                  id="pwd"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  className="p-2 w-full bg-gray-100"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="name" className="text-base">
              Full name
            </label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="name"
                  prefix={<SkinOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                  className="p-2 w-full bg-gray-100"
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="yob" className="text-base">
              Year of birth
            </label>
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
                  id="yob"
                  prefix={<FieldTimeOutlined className="site-form-item-icon" />}
                  placeholder="Year of birth"
                  className="p-2 w-full bg-gray-100"
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
                className="w-full font-semibold h-[45px] text-[16px] "
              >
                Register
              </Button>
            </ConfigAntdButton>
            <div className="text-center mt-2 text-black">
              <span className="opacity-70 italic">
                Already have an account?{' '}
              </span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
