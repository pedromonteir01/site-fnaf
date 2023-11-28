// SidebarHeader.js
import React from 'react';
import styled from 'styled-components';

const SidebarHeaderWrapper = styled.div`
  background-color: #333;
  color: #fff;
  padding: 16px;
  text-align: center;
`;

const SidebarHeader = () => {
  return (
    <SidebarHeaderWrapper>
      <h2>Seu Cabeçalho</h2>
    </SidebarHeaderWrapper>
  );
};

export default SidebarHeader;
