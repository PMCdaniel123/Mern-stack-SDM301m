import { Avatar, Typography, Menu, Button } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import { NavigationItems } from '@/constant/menu-data';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '@/store/reducers/authReducer';
import { PATHS } from '@/constant/path';
import React from 'react';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import tokenMethod from '@/utils/token';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.auth.profile);
  const { name } = profile || {};

  const _onLogout = (e) => {
    e?.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  const _onLogin = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    navigate(PATHS.LOGIN);
  };

  return (
    <AntHeader className="bg-white flex justify-between items-center px-10">
      <div className="flex items-center gap-8">
        <Menu
          onClick={({ key }) => navigate(key)}
          className="bg-white duration-300"
          items={NavigationItems}
          mode="horizontal"
          selectable={false}
        />
      </div>
      {token ? (
        <div className="flex items-center gap-8">
          <Typography.Text className="text-black">
            Welcome {name}
          </Typography.Text>
          <div className="flex items-center gap-2">
            <Avatar
              icon={
                <PersonSharpIcon sx={{ color: 'black' }} fontSize="large" />
              }
              shape="square"
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
            <Button type="primary" onClick={_onLogin}>
              Login
            </Button>
          </ConfigAntdButton>
        </div>
      )}
    </AntHeader>
  );
};

export default Navigation;
