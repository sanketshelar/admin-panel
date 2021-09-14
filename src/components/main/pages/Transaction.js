import React from 'react';
import styled from 'styled-components/macro';
import Avatar from '@material-ui/core/Avatar';

const Transaction = ({ src, name, date, amount, status }) => {
  let bg = '';
  let col = '';
  if (status === 'Approved') {
    bg = '#e5faf2';
    col = '#3bb077';
  } else if (status === 'Pending') {
    bg = '#ebf1fe';
    col = '#2a7ade';
  } else {
    bg = '#fff0f1';
    col = '#d95087';
  }
  return (
    <TransactionContainer>
      <Name>
        <AvatarLogo src={src} alt='' />
        <span>{name}</span>
      </Name>

      <Date>
        <span>{date}</span>
      </Date>
      <Amount>
        <span>{amount}</span>
      </Amount>
      <Status>
        <span style={{ color: col, backgroundColor: bg }}>{status}</span>
      </Status>
    </TransactionContainer>
  );
};

export default Transaction;

const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 70px;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  > span {
    font-weight: bold;
  }
`;

const AvatarLogo = styled(Avatar)`
  cursor: pointer;
  margin-right: 10px;
  object-fit: cover;
`;

const Date = styled.div`
  flex: 1;
`;

const Amount = styled.div`
  flex: 1;
`;

const Status = styled.div`
  flex: 1;
`;
