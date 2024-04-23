import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  background-color: yellow;

  @media (min-width: 600px) {
    min-width: 500px;
    background-color: red;
  }
`;
