import { Avatar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LocationSearchingOutlinedIcon from '@material-ui/icons/LocationSearchingOutlined';

const Profile = () => {
  return (
    <ProfileContainer>
      <Container>
        <div className='first'>
          <UserAvatar
            src='https://p.favim.com/orig/2018/09/15/matching-icons-matching-icon-icon-Favim.com-6329494.jpg'
            alt=''
          />
          <UserInfo>
            <span className='name'>Sanket Shelar</span>
            <span className='profession'>MERN Devloper</span>
          </UserInfo>
        </div>
        <AccountContainer>
          <div className='second'>
            <p>Account Details</p>
            <div className='second__info'>
              <span>
                <PermIdentityOutlinedIcon /> sanketshelar98
              </span>
              <span>
                <CakeOutlinedIcon />
                08-07-1998
              </span>
            </div>
          </div>
          <div className='third'>
            <p>Contact</p>
            <div className='third__info'>
              <span>
                <PhoneIphoneOutlinedIcon />
                +91 7020556680
              </span>
              <span>
                <MailOutlineOutlinedIcon /> shelarsanket1998@gmail.com
              </span>
              <span>
                <LocationSearchingOutlinedIcon />
                New York | USA
              </span>
            </div>
          </div>
        </AccountContainer>
      </Container>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-bottom: 100px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 20px;

  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
`;

const Container = styled.div`
  .first {
    display: flex;
    align-items: center;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    font-weight: bold;
    font-size: 19px;
  }
  .profession {
    color: gray;
    font-size: 15px;
  }
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;

  .second {
    margin-top: 20px;

    p {
      font-size: 15px;
      color: gray;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .second__info {
      display: flex;
      flex-direction: column;

      > span {
        display: flex;
        align-items: center;
        margin: 12px 0px;

        > .MuiSvgIcon-root {
          margin-right: 15px;
        }
      }
    }
  }

  .third {
    margin-top: 20px;

    p {
      font-size: 15px;
      color: gray;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .third__info {
      display: flex;
      flex-direction: column;

      > span {
        display: flex;
        align-items: center;
        margin: 12px 0px;

        > .MuiSvgIcon-root {
          margin-right: 15px;
        }
      }
    }
  }
`;
const UserAvatar = styled(Avatar)`
  margin-right: 20px;
`;
