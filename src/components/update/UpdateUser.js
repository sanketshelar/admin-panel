import React from 'react';
import styled from 'styled-components';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
import { Link } from 'react-router-dom';

const UpdateUser = () => {
  return (
    <Container>
      <div>
        <h1>Edit User</h1>

        <Link to='/newuser'>
          <button>Create</button>
        </Link>
      </div>
      <UpdateUserContainer>
        <Profile />
        <Edit />
      </UpdateUserContainer>
    </Container>
  );
};

export default UpdateUser;

const Container = styled.div`
  margin-top: 25px;
  flex: 4;
  > div {
    display: flex;
    justify-content: space-between;
  }
  > div > h1 {
    margin-bottom: 25px;
  }

  > div > a > button {
    margin-right: 45px;
    margin-bottom: 25px;
    width: 80px;
    height: 40px;
    border-radius: 10px;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const UpdateUserContainer = styled.div`
  display: flex;
`;
