import Navigator from '@/components/AdminMenu/Menu';
// import BackToTop from '@/components/BackToTop/BackToTop';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { MainContextProvider } from '@/context/MainContext';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <MainContextProvider>
      <div className="page-wrapper">
        <Layout className="min-h-screen">
          <Header />
          <Layout>
            <div className="bg-white">
              <Navigator />
            </div>
            <Content className="flex flex-col">
              <Outlet />
            </Content>
          </Layout>
          <Footer />
        </Layout>
      </div>
      {/* <BackToTop /> */}
    </MainContextProvider>
  );
};

export default MainLayout;
