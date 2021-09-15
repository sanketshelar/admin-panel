import React from 'react';
import styled from 'styled-components';
import ProductChart from './pages/ProductChart';
import EditProduct from './pages/EditProduct';
import ShowProduct from './pages/ShowProduct';
import { Link } from 'react-router-dom';

const UpdateProduct = () => {
  return (
    <CreateProductContainer>
      <div>
        <h1>Edit Product</h1>
        <Link to='/newProduct'>
          <button>Create</button>
        </Link>
      </div>
      <Container>
        <ProductInfo>
          <ProductChart />
          <ShowProduct />
        </ProductInfo>
        <EditProduct />
      </Container>
    </CreateProductContainer>
  );
};

export default UpdateProduct;

const CreateProductContainer = styled.div`
  flex: 4;
  margin-top: 20px;

  > div {
    display: flex;
    justify-content: space-between;

    > a > button {
      margin-right: 35px;
      padding: 10px 25px;
      color: white;
      background-color: teal;
      border-radius: 5px;
      cursor: pointer;
      border: none;
    }
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const ProductInfo = styled.div`
  display: flex;
  width: 100%;
`;
