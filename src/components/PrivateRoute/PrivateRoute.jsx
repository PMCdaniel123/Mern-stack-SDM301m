import { handleLogout } from '@/store/reducers/authReducer';
import tokenMethod from '@/utils/token';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ redirectPath }) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  if (!tokenMethod.get() || !role) {
    dispatch(handleLogout());
    return <Navigate to={redirectPath} replace={true} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
