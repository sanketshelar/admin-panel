import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import CreateUser from './CreateUser';

const Create = () => {
  return (
    <CreateContainer>
      <Sidebar />
      <CreateUser />
    </CreateContainer>
  );
};

export default Create;

const CreateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
