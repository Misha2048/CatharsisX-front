import { styled } from '@linaria/react';

export const Container = styled.div`
  position: fixed;
  right: 10px;
  bottom: 16px;
  z-index: 10;
  background-color: #3ec290;
  width: 300px;
  margin: 0px auto;
  max-height: calc(100vh - 32px);
  overflow: auto;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s ease 0s;

  &[data-show='false'] {
    right: -100%;
  }

  @media (min-width: 375px) {
    right: 16px;
  }

  @media (min-width: 1024px) {
    width: 400px;
  }
`;
