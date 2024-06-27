import React from 'react';
import { Layout, Menu, Avatar, Typography } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MenuItems } from '@/constant/menu-data';
import { PATHS } from '@/constant/path';
import { handleLogout } from '@/store/reducers/authReducer';
import styled from 'styled-components';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';

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

const CombinedHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const _onLogout = (e) => {
    e?.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  return (
    <AntHeader className="bg-black h-20 py-3 flex items-center justify-between px-6">
      <div className="flex items-center">
        <WatchLaterSharpIcon fontSize="large" className="text-white" />
        <Menu
          onClick={({ key }) => navigate(key)}
          className="bg-black text-white ml-4"
          mode="horizontal"
          items={MenuItems}
          selectedKeys={[location.pathname]}
          theme="dark"
        />
      </div>
      <div className="flex items-center gap-5">
        <Avatar
          icon={<AccountBoxIcon fontSize="large" />}
          shape="square"
          size="large"
          className="cursor-pointer"
        />
        <div className="flex flex-col">
          <Typography.Text className="text-white">Admin</Typography.Text>
          <LinkStyled href="#" onClick={_onLogout}>
            Logout
          </LinkStyled>
        </div>
      </div>
    </AntHeader>
  );
};

export default CombinedHeader;
