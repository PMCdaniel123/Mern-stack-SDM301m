import React from 'react';
import { Avatar, Typography, Menu } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import avatar from '@/assets/avatar.svg';
import { PATHS } from '@/constant/path';
import { NavigationItems } from '@/constant/menu-data';

const LinkStyled = styled.a`
  color: black !important;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: rgb(225 29 72) !important;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();

  const _onLogout = (e) => {
    e?.preventDefault();
    navigate(PATHS.LOGIN);
  };

  return (
    <AntHeader className="bg-white flex justify-between items-center px-10">
      <div className="flex items-center gap-8">
        <img src={'https://static.vecteezy.com/system/resources/previews/003/189/903/large_2x/watch-classic-logo-icon-design-vector.jpg'} alt="Logo" className="w-12" />
        <Menu 
         onClick={({ key }) => navigate(key)}
         className="bg-white duration-300"
         
         items={NavigationItems}
         mode="horizontal" selectable={false}>
        </Menu>
      </div>
      <div className="flex items-center gap-8">
        <Typography.Text className="text-black">Welcome, user</Typography.Text>
        <div className="flex items-center gap-2">
          <Avatar src={avatar} size={46} className="border-white border-2 cursor-pointer" />
          <Typography.Text>
            <LinkStyled href="#" onClick={_onLogout}>
              Log out
            </LinkStyled>
          </Typography.Text>
        </div>
      </div>
    </AntHeader>
  );
};

export default Navigation;