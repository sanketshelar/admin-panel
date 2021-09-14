import React from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ data }) => {
  return (
    <Container>
      <h3>Actice User Analytics</h3>
      <ChartCont>
        <ResponsiveContainer width='95%' aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey='month' stroke='#5550bd' />
            <Line
              type='monotone'
              dataKey='activeUsers'
              stroke='#8884d8'
              strokeWidth={2}
            />
            <Tooltip />
            <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
          </LineChart>
        </ResponsiveContainer>
      </ChartCont>
    </Container>
  );
};

export default Chart;

const Container = styled.div`
  margin: 10px 20px;
  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  border-radius: 10px;

  > h3 {
    margin: 20px 35px;
    padding-top: 40px;
    font-size: 30px;
    font-weight: bold;
  }
`;

const ChartCont = styled.div`
  width: 95%;
  margin: 0px auto;
`;
