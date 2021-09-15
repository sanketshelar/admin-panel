import React, { useState } from 'react';
import styled from 'styled-components';
import { DataGrid } from '@material-ui/data-grid';
import { products } from '../../data/ProductData';
import { Avatar } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(products);

  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'product',
      headerName: 'Product Name',
      width: 280,
      renderCell: (params) => {
        return (
          <RenderContainer>
            <AvatarIcon src={params.row.avatar} alt='' />
            {params.row.product}
          </RenderContainer>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 250,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.status}</div>;
      },
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <ActionContainer>
            <Link to={`/product/${params.row.id}`}>
              <button>Edit</button>
            </Link>
            <DeleteOutlineIcon onClick={() => handleClick(params.row.id)} />
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <ProductListConatiner>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick
      />
    </ProductListConatiner>
  );
};

export default ProductList;

const ProductListConatiner = styled.div`
  flex: 4;
`;
const RenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const AvatarIcon = styled(Avatar)`
  margin-right: 10px;
  object-fit: cover;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  > a > button {
    border: none;
    padding: 10px 30px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
    background-color: #00b300;
    color: white;
  }
  > .MuiSvgIcon-root {
    color: red;
    cursor: pointer;
  }
`;
