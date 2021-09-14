import React from 'react';
import styled from 'styled-components';
import TimelineIcon from '@material-ui/icons/Timeline';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';

const Staff = () => {
  return (
    <StaffContainer>
      <p>Staff</p>
      <div>
        <span>
          <BusinessCenterOutlinedIcon />
          Manage
        </span>
        <span>
          <TimelineIcon />
          Analytics
        </span>
        <span>
          <ReportOutlinedIcon />
          Report
        </span>
      </div>
    </StaffContainer>
  );
};

export default Staff;

const StaffContainer = styled.div`
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
    }
  }
`;
