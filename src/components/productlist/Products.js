import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import ProductList from './ProductList';

const Products = () => {
  return (
    <ProductsContainer>
      <Sidebar />
      <ProductList />
    </ProductsContainer>
  );
};

export default Products;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
