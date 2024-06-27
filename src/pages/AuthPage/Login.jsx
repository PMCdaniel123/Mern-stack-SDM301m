import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PATHS } from '@/constant/path';
import { handleLogin } from '@/store/reducers/authReducer';
import { MESS } from '@/constant/validate';
import { Controller, useForm } from 'react-hook-form';
import useDebounce from '@/hooks/useDebounce';
import ComponentLoading from '@/components/ComponentLoading/ComponentLoading';

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

  const apiLoading = useDebounce(loading.login, 300);

  return (
    <div className="flex  justify-center items-center min-h-screen bg-cover bg-center">
      <div className="p-10 bg-white bg-opacity-60 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-5 text-black">
          LOGIN
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          {apiLoading && <ComponentLoading />}
          <div className="mb-4">
            <label htmlFor="name" className="text-base">
              Member Name
            </label>
            <Controller
              name="membername"
              control={control}
              defaultValue=""
              rules={{ required: MESS.ERROR_MEMBERNAME }}
              render={({ field }) => (
                <Input
                  {...field}
                  id="name"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Enter Member name"
                  className="p-3 bg-gray-100"
                />
              )}
            />
            {errors.membername && (
              <p className="text-red-500">{errors.membername.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="pwd" className="text-base">
              Password
            </label>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: MESS.ERROR_PASSWORD }}
              render={({ field }) => (
                <Input
                  {...field}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  id="pwd"
                  type="password"
                  placeholder="Enter Password"
                  className="p-3 bg-gray-100"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-full font-semibold h-10"
              loading={loading.login}
            >
              LOGIN
            </Button>
            <div className="text-center mt-2 text-black">
              <span className="opacity-70 italic">Create an Account? </span>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
