import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  height: 200px;

  background-image: url(../public/logo192.png);
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 600px) {
    min-width: 500px;
    background-color: #f6efff;
  }
`;
