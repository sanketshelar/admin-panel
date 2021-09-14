import React from 'react';
import styled from 'styled-components/macro';
import Dashboard from './menu/Dashboard';
import Quick from './menu/Quick';
import Notifications from './menu/Notifications';
import Staff from './menu/Staff';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Dashboard />
      <Quick />
      <Notifications />
      <Staff />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: calc(100vh - 80px);
  position: sticky;
  top: 80px;
  min-width: 300px;
`;
