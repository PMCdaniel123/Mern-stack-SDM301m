import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { PATHS } from '@/constant/path';
import { handleLogin } from '@/store/reducers/authReducer';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import { MESS } from '@/constant/validate';
import { Controller, useForm } from 'react-hook-form';

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data && !loading.login) {
      try {
        const res = await dispatch(handleLogin(data)).unwrap();
        navigate(PATHS.HOME);
        console.log('res', res);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/watches.jpg')" }}
    >
      <div className="p-10 bg-gray-800 bg-opacity-60 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-5 text-white">
          LOGIN
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="mb-4">
            <Controller
              name="membername"
              control={control}
              defaultValue=""
              rules={{ required: MESS.ERROR_MEMBERNAME }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Member name"
                  className="p-2"
                />
              )}
            />
            {errors.membername && (
              <p className="text-red-500">{errors.membername.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: MESS.ERROR_PASSWORD }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  className="p-2"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <ConfigAntdButton>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button w-full font-semibold"
              >
                Login
              </Button>
            </ConfigAntdButton>
            <div className="text-center mt-2 text-white">
              Create an Account?{' '}
              <a href="/register" className="text-gray-400">
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
