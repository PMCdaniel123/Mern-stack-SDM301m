import { Menu, Layout, Button } from 'antd';
import { CloseOutlined, BarsOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItems } from '@/constant/menu-data';

const { Sider } = Layout;

export default function Navigator() {
  const [isCollapse, setIsCollapse] = useState(false);
  const navigate = useNavigate();
  const toggleCollapse = () => setIsCollapse((prev) => !prev);
  const location = useLocation();

  return (
    <div className="h-screen">
      <Sider
        className="bg-white"
        collapsible
        trigger={null}
        collapsed={isCollapse}
      >
        <div className="bg-white flex items-center">
          <Button
            className={
              isCollapse ? 'mx-4 my-2 duration-300' : 'mx-2.5 my-2 duration-300'
            }
            type="text"
            onClick={toggleCollapse}
          >
            {isCollapse ? (
              <BarsOutlined className="text-lg !flex items-center" />
            ) : (
              <CloseOutlined className="text-lg !flex items-center" />
            )}
          </Button>
        </div>
        <Menu
          onClick={({ key }) => navigate(key)}
          className="bg-white duration-300 h-screen flex-1 justify-around"
          mode="inline"
          items={MenuItems}
          selectedKeys={[location.pathname]}
          theme="light"
        />
      </Sider>
    </div>
  );
}
