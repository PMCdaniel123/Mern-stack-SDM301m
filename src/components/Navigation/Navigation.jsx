import React from 'react';
import { Avatar, Typography, Menu, Button, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '@/store/reducers/authReducer';
import { PATHS } from '@/constant/path';
import { NavigationItems } from '@/constant/menu-data';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ConfigAntdButton from '../Button/ConfigAntdButton';
import tokenMethod from '@/utils/token';
import styled from 'styled-components';

const { Header: AntHeader } = Layout;

const LinkStyled = styled.a`
  color: #57ade7 !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  transition: 0.3s;
  &:hover {
    color: #f43737 !important;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.auth);
  const { name } = profile || {};

  const onLogout = (e) => {
    e?.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  const onLogin = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    navigate(PATHS.LOGIN);
  };

  return (
    <AntHeader className="bg-white flex justify-between items-center h-19 px-10">
      <div className="flex items-center gap-8">
        <Menu
          onClick={({ key }) => navigate(key)}
          className="bg-white duration-300"
          items={NavigationItems}
          mode="horizontal"
          selectable={false}
        />
      </div>
      {tokenMethod.get() ? (
        <div className="flex items-center gap-8">
          <Typography.Text className="text-blue-700">
            <span className="text-black">Welcome</span> {name}
          </Typography.Text>
          <div className="flex items-center gap-2">
            <Avatar
              icon={
                <PersonSharpIcon sx={{ color: 'black' }} fontSize="large" />
              }
              shape="square"
              className="border-white border-2 cursor-pointer"
            />
            <LinkStyled href="#" onClick={onLogout}>
              Logout
            </LinkStyled>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-8">
          <ConfigAntdButton>
            <Button type="primary" onClick={onLogin}>
              Login / Register
            </Button>
          </ConfigAntdButton>
        </div>
      )}
    </AntHeader>
  );
};

export default Navigation;
