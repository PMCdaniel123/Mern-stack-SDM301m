import BackToTop from '@/components/BackToTop/BackToTop';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { MainContextProvider } from '@/context/MainContext';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <MainContextProvider>
      <div className="page-wrapper">
        <Header />
        <Outlet />
        <Footer />
      </div>
      <BackToTop />
    </MainContextProvider>
  );
};

export default MainLayout;
