import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { users } from '../../data/UserData';
import { DataGrid } from '@material-ui/data-grid';
import { Avatar } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(users);

  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <RenderContainer>
            <AvatarIcon src={params.row.avatar} alt='' />
            {params.row.user}
          </RenderContainer>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
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
      field: 'transaction',
      headerName: 'Transaction',
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <ActionContainer>
            <Link to={`/user/${params.row.id}`}>
              <button>Edit</button>
            </Link>
            <DeleteOutlineIcon onClick={() => handleClick(params.row.id)} />
          </ActionContainer>
        );
      },
    },
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListContainer>
  );
};

export default UserList;

const UserListContainer = styled.div`
  flex: 4;
  width: 100vw;
  height: 90vh;
`;
const RenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const AvatarIcon = styled(Avatar)`
  margin-right: 10px;
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
