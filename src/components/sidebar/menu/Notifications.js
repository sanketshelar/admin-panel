import React from 'react';
import styled from 'styled-components/macro';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const Notifications = () => {
  return (
    <NotificationsContainer>
      <p>Notifications</p>
      <div>
        <span>
          <MailOutlineOutlinedIcon />
          Mail
        </span>
        <span>
          <FeedbackOutlinedIcon />
          Feedback
        </span>
        <span>
          <MessageOutlinedIcon />
          Messages
        </span>
      </div>
    </NotificationsContainer>
  );
};

export default Notifications;

const NotificationsContainer = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
  width: 100%;
  > p {
    font-size: 15px;
    margin-left: 15px;
    margin-bottom: 5px;
    color: darkblue;
    font-weight: bold;
  }
  > div {
    display: flex;
    flex-direction: column;

    > span {
      display: flex;
      align-items: center;

      color: gray;
      font-weight: 500;
      padding: 5px 5px;
      margin: 5px 20px;
      cursor: pointer;

      :hover,
      :active {
        background-color: rgb(228, 228, 250);
      }

      > .MuiSvgIcon-root {
        margin-right: 3px;
      }
    }
  }
`;
