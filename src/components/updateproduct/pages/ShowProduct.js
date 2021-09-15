import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const ShowProduct = () => {
  return (
    <ShowProductConatiner>
      <div className='first'>
        <ProductAvatar
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSudVVtxtHQKi6qE9h_Q4eDPlC12QXgguVsw&usqp=CAU'
          alt=''
        />
        <h3>T-Shirt</h3>
      </div>
      <div className='second'>
        <p>Id: 20</p>
        <p>Sale: 655</p>
        <p>Available: Yes</p>
        <p>In Stock: 200</p>
      </div>
    </ShowProductConatiner>
  );
};

export default ShowProduct;

const ShowProductConatiner = styled.div`
  flex: 1;
  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  padding: 20px;
  margin-right: 30px;

  .first {
    display: flex;
    align-items: center;
  }
  .second {
    margin-top: 20px;
    margin-left: 15px;
  }
`;

const ProductAvatar = styled(Avatar)`
  margin-right: 20px;
`;
