import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PATHS } from '@/constant/path';
import { handleLogin } from '@/store/reducers/authReducer';
import { MESS } from '@/constant/validate';
import { Controller, useForm } from 'react-hook-form';
import ConfigAntdButton from '@/components/Button/ConfigAntdButton';
import './index.css';

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
        const { role } = await dispatch(handleLogin(data)).unwrap();
        if (role) {
          navigate(PATHS.ADMIN.HOME);
        } else {
          navigate(PATHS.HOME);
        }
        console.log('role', role);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen bg-cover bg-center">
      <div className="p-10 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg w-full max-w-md">
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
                  className="p-2 rounded-lg"
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
                  className="p-2 rounded-lg"
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
                className="login-form-button w-full font-semibold rounded-lg"
                loading={loading.login}
              >
                Login
              </Button>
            </ConfigAntdButton>
            <div className="text-center mt-2 text-white">
              Create an Account?{' '}
              <Link
                to="/register"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
