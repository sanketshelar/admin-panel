import React from 'react';
import styled from 'styled-components/macro';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { device } from '../../responsive/Responsive';

const navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <Link to='/'>
          <h1>AdminPanel</h1>
        </Link>
      </NavbarLeft>
      <NavbarRight>
        <span>
          <NotificationsIcon />
          <span className='first'>5</span>
        </span>
        <span>
          <LanguageIcon />
          <span className='first'>2</span>
        </span>
        <span>
          <SettingsIcon />
        </span>
        <span>
          <AdminAvatar
            src='https://cdn.iconscout.com/icon/free/png-256/man-avatar-14-1103748.png'
            alt='profile icon'
          />
        </span>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default navbar;

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  z-index: 999;
  background-color: white;
  height: 80px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const NavbarLeft = styled.div`
  margin-left: 20px;
  > a {
    text-decoration: none;

    :hover,
    :active {
      color: darkblue;
    }
  }
  > h1 {
    color: darkblue;
    font-weight: bold;
    cursor: pointer;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  > span {
    margin: 0px 10px;
    cursor: pointer;
    position: relative;

    > .MuiSvgIcon-root {
      font-size: 30px;
    }

    .first {
      position: absolute;
      top: -10px;
      left: 16px;
      background-color: red;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      padding: 10px;
      color: white;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const AdminAvatar = styled(Avatar)`
  border: 1px solid black;
  padding: 2px;
`;
