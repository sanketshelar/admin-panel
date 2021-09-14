import React from 'react';
import styled from 'styled-components';
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';

const Homepage = () => {
  return (
    <HomeContainer>
      <Sidebar />
      <Main />
    </HomeContainer>
  );
};

export default Homepage;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
