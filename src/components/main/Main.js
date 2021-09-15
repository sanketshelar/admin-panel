import React from 'react';
import styled from 'styled-components/macro';
import Chart from './pages/Chart';
import InfoWidgets from './pages/InfoWidgets';
import { data } from '../../data/ChartData';
import Members from './pages/Members';
import Transaction from './pages/Transaction';
import { members } from '../../data/MemberData';
import { TransData } from '../../data/TransactionData';
import { device } from '../../responsive/Responsive';

const Main = () => {
  console.log(data);
  return (
    <MainContainer>
      <InfoContainer>
        <InfoWidgets
          title='Revenue'
          money='2,454'
          down='-11.4'
          direction='down'
        />
        <InfoWidgets title='Sales' money='4,415' down='-1.4' direction='down' />
        <InfoWidgets title='Cost' money='2,224' down='+21.4' direction='up' />
      </InfoContainer>

      <ChartContainer>
        <Chart data={data} />
      </ChartContainer>

      <LowerContainer>
        <SmContainer>
          <h2>New Join Members</h2>
          {members.map((item) => (
            <Members
              src={item.src}
              name={item.name}
              profession={item.profession}
            />
          ))}
        </SmContainer>

        <LgContainer>
          <h2>Latest Transactions</h2>
          <Inside>
            <div>Customer</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Status</div>
          </Inside>
          {TransData.map((item) => (
            <Transaction
              src={item.src}
              name={item.name}
              date={item.date}
              amount={item.amount}
              status={item.status}
            />
          ))}
        </LgContainer>
      </LowerContainer>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ChartContainer = styled.div``;

const LowerContainer = styled.div`
  display: flex;
  margin: 10px 20px;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const SmContainer = styled.div`
  flex: 1;
  border-radius: 10px;
  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);

  margin-right: 15px;

  > h2 {
    margin: 15px 15px;
    margin-bottom: 40px;
  }
`;

const LgContainer = styled.div`
  flex: 2;
  border-radius: 10px;
  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);

  margin-left: 15px;

  > h2 {
    margin: 15px 15px;
  }

  @media ${device.tablet} {
    margin: 25px 0px;
  }
`;

const Inside = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-left: 80px;

  > div {
    flex: 1;
    font-weight: bold;
  }
`;
