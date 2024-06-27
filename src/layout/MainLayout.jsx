import Footer from '@/components/Footer/Footer';
import CombinedHeader from '@/components/Header/Header';
import { MainContextProvider } from '@/context/MainContext';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <MainContextProvider>
      <div className="page-wrapper">
        <Layout className="min-h-screen">
          <CombinedHeader />
          <Layout>
            <Content className="flex flex-col">
              <Outlet />
            </Content>
          </Layout>
          <Footer />
        </Layout>
      </div>
    </MainContextProvider>
  );
};

export default MainLayout;
