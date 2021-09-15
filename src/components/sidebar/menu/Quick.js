import React from 'react';
import styled from 'styled-components';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from 'react-router-dom';

const Quick = () => {
  return (
    <QuickMenu>
      <p>Quick Menu</p>
      <div>
        <span>
          <Link to='/users'>
            <PersonOutlineOutlinedIcon />
            Users
          </Link>
        </span>
        <span>
          <Link to='/products'>
            <CardGiftcardIcon />
            Products
          </Link>
        </span>
        <span>
          <MonetizationOnOutlinedIcon />
          Transactions
        </span>
        <span>
          <BarChartIcon />
          Reports
        </span>
      </div>
    </QuickMenu>
  );
};

export default Quick;

const QuickMenu = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
  width: 100%;
  > p {
    font-size: 15px;
    margin-left: 15px;
    margin-bottom: 5px;
    color: darkblue;
    font-weight: bold;
  }
  > div {
    display: flex;
    flex-direction: column;

    > span {
      display: flex;
      align-items: center;

      color: gray;
      font-weight: 500;
      padding: 5px 5px;
      margin: 5px 20px;
      cursor: pointer;

      :hover,
      :active {
        background-color: rgb(228, 228, 250);
      }

      > .MuiSvgIcon-root {
        margin-right: 3px;
      }

      > a {
        color: gray;
        text-decoration: none;
        display: flex;
        align-items: center;
      }
    }
  }
`;
