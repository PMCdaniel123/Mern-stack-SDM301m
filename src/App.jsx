import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATHS } from './constant/path';
import Login from './pages/LoginPage/Login';
import Register from './pages/Register';
import MainLayout from './layout/MainLayout';
import BrandsManagement from './pages/BrandsPage/BrandsManagement';
import MemberLayout from './layout/MemberLayout';
import UserProfile from './pages/ProfilePage/Profile';
import ProductCard from './components/ProductCard/ProductCard';
import ProductPage from './pages/Product/ProductPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.REGISTER} element={<Register />} />
        <Route path={PATHS.HOME} element={<MemberLayout/>}>
          <Route index element={'home page'} />
          <Route path={PATHS.MEMBER.PROFILE} element={<UserProfile/>} />
          <Route path={PATHS.MEMBER.HOME_PAGE} element={<ProductPage/>} />
        </Route> 
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={'Admin home page'} />
          <Route path={PATHS.ADMIN.BRANDS} element={<BrandsManagement />} />
          <Route path={PATHS.ADMIN.WATCHES} element={'Watches'} />
          <Route path={PATHS.ADMIN.ACCOUNTS} element={'Accounts'} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
