import React from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const InfoWidgets = (props) => {
  return (
    <WidgetsContainer>
      <p className='title'>{props.title}</p>
      <div>
        <span className='revenue'>${props.money}</span>
        <span className='down'>
          {props.down}
          {props.direction === 'down' ? (
            <ArrowDownwardIcon style={{ color: 'red' }} />
          ) : (
            <ArrowUpwardIcon style={{ color: 'green' }} />
          )}
        </span>
      </div>
      <p className='month'>Compared to last month</p>
    </WidgetsContainer>
  );
};

export default InfoWidgets;

const WidgetsContainer = styled.div`
  flex: 1;
  margin: 10px 20px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  cursor: pointer;

  :hover,
  :active {
    background-color: rgb(228, 228, 250);
  }

  .title {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .revenue {
      font-weight: bolder;
      font-size: 30px;
      margin-right: 20px;
    }
    .down {
      font-weight: 500;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
  }

  .month {
    color: gray;
    font-size: 16px;
    font-weight: bold;
  }
`;
