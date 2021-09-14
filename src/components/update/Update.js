import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import UpdateUser from './UpdateUser';

const Update = () => {
  return (
    <UpdateContainer>
      <Sidebar />
      <UpdateUser />
    </UpdateContainer>
  );
};

export default Update;

const UpdateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
