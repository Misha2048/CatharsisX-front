import React from 'react';
import { styled } from '@linaria/react';

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  color: #fff;
  background-color: #282828;
`;

function Home() {
  return <StyledHome>Welcome!</StyledHome>;
}

export default Home;
