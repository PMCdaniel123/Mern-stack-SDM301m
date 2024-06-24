import { Avatar, Typography, Menu, Button } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { NavigationItems } from '@/constant/menu-data';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '@/store/reducers/authReducer';
import { PATHS } from '@/constant/path';
import React from 'react';
import avatar from '@/assets/avatar.svg';
import ConfigAntdButton from '../Button/ConfigAntdButton';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // console.log(token);

  const _onLogout = () => {
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  const login = () => {
    navigate(PATHS.LOGIN);
  };

  return (
    <AntHeader className="bg-white flex justify-between items-center px-10">
      <div className="flex items-center gap-8">
        <img
          src={
            'https://static.vecteezy.com/system/resources/previews/003/189/903/large_2x/watch-classic-logo-icon-design-vector.jpg'
          }
          alt="Logo"
          className="w-12"
        />
        <Menu
          onClick={({ key }) => navigate(key)}
          className="bg-white duration-300"
          items={NavigationItems}
          mode="horizontal"
          selectable={false}
        ></Menu>
      </div>
      {token ? (
        <div className="flex items-center gap-8">
          <Typography.Text className="text-black">
            Welcome, user
          </Typography.Text>
          <div className="flex items-center gap-2">
            <Avatar
              src={avatar}
              size={46}
              className="border-white border-2 cursor-pointer"
            />
            <ConfigAntdButton type="danger">
              <Button type="primary" onClick={_onLogout}>
                Log out
              </Button>
            </ConfigAntdButton>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <ConfigAntdButton type="primary">
            <Button type="primary" onClick={login}>
              Login
            </Button>
          </ConfigAntdButton>
        </div>
      )}
    </AntHeader>
  );
};

export default Navigation;
