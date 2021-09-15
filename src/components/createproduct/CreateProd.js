import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import NewProduct from './NewProduct';

const CreateProd = () => {
  return (
    <CreateProdContainer>
      <Sidebar />
      <NewProduct />
    </CreateProdContainer>
  );
};

export default CreateProd;

const CreateProdContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
