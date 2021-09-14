import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import UserList from './UserList';

const User = () => {
  return (
    <UserContainer>
      <Sidebar />
      <UserList />
    </UserContainer>
  );
};

export default User;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
