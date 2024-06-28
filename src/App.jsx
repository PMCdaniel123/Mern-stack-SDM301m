import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATHS } from './constant/path';
import Login from './pages/LoginPage/Login';
import Register from './pages/RegisterPage/Register';
import MainLayout from './layout/MainLayout';
import BrandsManagement from './pages/BrandsPage/BrandsManagement';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MembersManagement from './pages/AccountsPage/MembersManagement';
import WatchesManagement from './pages/WatchesPage/WatchesManagement';
import MemberLayout from './layout/MemberLayout';
import UserProfile from './pages/ProfilePage/Profile';
import ProductPage from './pages/Product/ProductPage';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import WatchDetail from './pages/WatchesPage/WatchDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MemberLayout />}>
          <Route index element={<ProductPage />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.REGISTER} element={<Register />} />
          <Route path={PATHS.MEMBER.PROFILE} element={<UserProfile />} />
          <Route
            path={PATHS.MEMBER.WATCH_DETAILS}
            element={<ProductDetail />}
          />
        </Route>

        <Route element={<PrivateRoute redirectPath={PATHS.LOGIN} />}>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route
              path={PATHS.ADMIN.HOME}
              element={'Welcome to Pham Manh Cuong page'}
            />
            <Route path={PATHS.ADMIN.BRANDS} element={<BrandsManagement />} />
            <Route path={PATHS.ADMIN.WATCHES} element={<WatchesManagement />} />
            <Route
              path={PATHS.ADMIN.ACCOUNTS}
              element={<MembersManagement />}
            />
            <Route path={PATHS.ADMIN.WATCH_DETAILS} element={<WatchDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
