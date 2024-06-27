import {
  CaretDownOutlined,
  LockOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { Avatar, Typography, Space } from 'antd';
import { Header as AntHeader } from 'antd/es/layout/layout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from '@/store/reducers/authReducer';
import { PATHS } from '@/constant/path';
import React from 'react';
import avatar from '@/assets/ava.svg';
import useGetMemberInfor from '@/pages/ProfilePage/useGetProfile';
import Dropdown from '../Dropdown/Dropdown';
import Popup from '../Popup/Popup';
import UpdatePassword from '@/features/UpdatePassword/UpdatePassword';

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { data: member, isLoading } = useGetMemberInfor();

  const _onLogout = () => {
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  const ViewMemberOptionDropdown = () => [
    {
      label: <Link to={PATHS.MEMBER.PROFILE}>View Profile</Link>,
      key: 'view',
      icon: <ProfileOutlined />,
    },
    {
      label: (
        <Popup title="Update Password" content={<UpdatePassword />}>
          Update Password
        </Popup>
      ),
      key: 'reset-password',
      icon: <LockOutlined />,
    },
    {
      label: <p onClick={_onLogout}>Logout</p>,
      key: 'logout',
      icon: <LogoutOutlined />,
    },
  ];

  if (isLoading) return <div>Loading...</div>;

  return (
    <AntHeader className="bg-black shadow-md flex justify-between items-center px-10">
      <div className="flex items-center gap-8">
        <img
          src={
            'https://www.freepnglogos.com/uploads/rolex-png-logo/rolex-logo-png-transparent-6.png'
          }
          alt="Logo"
          className="w-28 cursor-pointer"
          onClick={() => navigate(PATHS.HOME)}
        />
      </div>
      {token && member ? (
        <div className="flex items-center gap-10">
          <Typography.Text className="text-white">
            Welcome, {member.name}
          </Typography.Text>
          <div className="flex items-center gap-10">
            <Dropdown items={ViewMemberOptionDropdown()} trigger={['click']}>
              <Space className="cursor-pointer">
                <Avatar
                  src={avatar}
                  size={46}
                  className="border-white border-2"
                />
                <CaretDownOutlined className="text-white" />
              </Space>
            </Dropdown>
          </div>
        </div>
      ) : (
        <div className="flex items-center p-6">
          <Link to={PATHS.LOGIN} className="text-white">
            <LoginOutlined /> Login
          </Link>
        </div>
      )}
    </AntHeader>
  );
};

export default Navigation;
