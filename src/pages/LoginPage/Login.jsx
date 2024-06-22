import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './index.css';
import ConfigAntdButton from '../../components/Button/ConfigAntdButton';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
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
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Member name"
              className="p-2"
              {...register('membername', {
                required: 'Member name is required',
              })}
            />
            {errors.membername && (
              <p className="text-red-500">{errors.membername.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="p-2"
              {...register('password', { required: 'Password is required' })}
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
