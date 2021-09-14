import React from 'react';
import styled from 'styled-components/macro';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <p>Dashboard</p>
      <div>
        <span>
          <Link to='/'>
            <HomeOutlinedIcon />
            Home
          </Link>
        </span>
        <span>
          <AssessmentOutlinedIcon />
          Analytics
        </span>
        <span>
          <TrendingUpIcon />
          Sales
        </span>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
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

      > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: gray;
      }

      :hover,
      :active {
        background-color: rgb(228, 228, 250);
      }

      > .MuiSvgIcon-root {
        margin-right: 3px;
      }
    }
  }
`;
