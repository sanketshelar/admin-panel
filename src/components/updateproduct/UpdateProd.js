import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import UpdateProduct from './UpdateProduct';

const UpdateProd = () => {
  return (
    <UpdateContainer>
      <Sidebar />
      <UpdateProduct />
    </UpdateContainer>
  );
};

export default UpdateProd;

const UpdateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
