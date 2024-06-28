import { Header as AntHeader } from 'antd/es/layout/layout';
import { Avatar, Button, Typography } from 'antd';
import { PATHS } from '@/constant/path';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '@/store/reducers/authReducer';
import avatar from '@/assets/admin.svg';
import styled from 'styled-components';
import ConfigAntdButton from '../Button/ConfigAntdButton';

const LinkStyled = styled.a`
  color: #fff !important;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: rgb(225 29 72) !important;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _onLogout = (e) => {
    e?.preventDefault();
    dispatch(handleLogout());
    navigate(PATHS.HOME);
  };

  return (
    <AntHeader className="bg-black flex justify-between items-center">
      <img
        src="https://www.freepnglogos.com/uploads/rolex-png-logo/rolex-logo-png-transparent-6.png"
        alt="Logo"
        className="w-28"
      />
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Avatar
            src={avatar}
            size={46}
            className="border-white border-2 cursor-pointer"
          />
          <div className="flex flex-col">
            <ConfigAntdButton type="danger">
              <Button type="primary" onClick={_onLogout}>
                Log out
              </Button>
            </ConfigAntdButton>
          </div>
        </div>
      </div>
    </AntHeader>
  );
};
export default Header;
