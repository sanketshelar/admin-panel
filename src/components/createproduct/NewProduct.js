import React from 'react';
import styled from 'styled-components';

const NewProduct = () => {
  return (
    <NewProductContainer>
      <h2>New Product</h2>
      <form>
        <div>
          <label>Image</label>
          <input type='file' />
        </div>
        <div>
          <label>Name</label>
          <input type='text' />
        </div>
        <div>
          <label>Stock</label>
          <input type='number' />
        </div>
        <div>
          <label>Available</label>
          <select name='available'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </NewProductContainer>
  );
};

export default NewProduct;

const NewProductContainer = styled.div`
  flex: 4;

  > form {
    width: 50%;
    margin-top: 25px;
    margin-right: 25px;
    box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
    -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
    -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  }

  > form > div {
    display: flex;
    flex-direction: column;
    padding: 15px;

    > label {
      margin-bottom: 15px;
      font-weight: bold;
      color: gray;
    }

    > input {
      width: 60%;
      outline: none;
      padding: 5px;
    }
    > select {
      width: 60%;
      padding: 5px;
    }
    > button {
      width: 30%;
      background-color: darkblue;
      color: white;
      padding: 10px 5px;
      cursor: pointer;
      border: none;
      margin-bottom: 20px;
    }
  }
`;
