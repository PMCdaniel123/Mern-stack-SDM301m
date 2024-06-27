import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import { MainContextProvider } from '@/context/MainContext';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';

const MemberLayout = () => {
  return (
    <MainContextProvider>
      <div className="page-wrapper">
        <Layout className="min-h-screen">
          <Navigation />
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

export default MemberLayout;
