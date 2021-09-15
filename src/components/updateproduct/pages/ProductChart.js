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

import { prodData } from '../../../data/ProductChartData';

const ProductChart = () => {
  return (
    <ChartContainer>
      <h3>Sales Performance</h3>
      <ResponsiveContainer width='85%' aspect={4 / 1}>
        <LineChart data={prodData}>
          <XAxis dataKey='month' stroke='#5550bd' />
          <Line
            type='monotone'
            dataKey='sales'
            stroke='#8884d8'
            strokeWidth={2}
          />
          <Tooltip />
          <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default ProductChart;

const ChartContainer = styled.div`
  flex: 1;
  height: 80%;
  box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -1px 2px 12px 4px rgba(0, 0, 0, 0.23);
  padding: 20px;
  margin-right: 30px;

  > h3 {
    margin-bottom: 20px;
  }
`;
