import React from 'react';
import styled from 'styled-components';
import PublishIcon from '@material-ui/icons/Publish';

const EditProduct = () => {
  return (
    <EditProductContainer>
      <h3>Edit Product</h3>
      <Container>
        <LeftContainer>
          <div>
            <label>Product Name</label>
            <input type='text' />
          </div>
          <div>
            <label>In Stock</label>
            <select name='stock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div>
            <label>Available</label>
            <select name='available'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
        </LeftContainer>
        <RightContainer>
          <span>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSudVVtxtHQKi6qE9h_Q4eDPlC12QXgguVsw&usqp=CAU'
              alt=''
            />

            <span>
              <label htmlFor='file'>
                <PublishIcon style={{ cursor: 'pointer' }} />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </span>
          </span>

          <button>Update</button>
        </RightContainer>
      </Container>
    </EditProductContainer>
  );
};

export default EditProduct;

const EditProductContainer = styled.div`
  flex: 1;
  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  margin-right: 30px;
  padding: 20px;
  height: 100%;
  margin-top: 20px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const LeftContainer = styled.div`
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;
    > label {
      font-weight: bold;
      color: gray;
      margin-bottom: 5px;
      margin-top: 10px;
    }

    > input {
      padding: 3px;
      border: none;
      outline: none;
      border-bottom: 1px solid darkblue;
    }

    > select {
      padding: 5px;
    }
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  margin-top: 10px;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > span > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 25px;
    margin-right: 10px;
  }
  > button {
    background-color: teal;
    color: white;
    padding: 10px 5px;
    cursor: pointer;
    border: none;
    margin-bottom: 20px;
    width: 50%;
  }
`;
