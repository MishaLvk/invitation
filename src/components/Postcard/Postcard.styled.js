import styled from 'styled-components';
import fon from '../Images/fon.jpg';

export const Fon = styled.div`
  background-image: url(${fon});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  max-width: 85%;
  height: 2200px;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgb(0, 0, 0, 0.2);
  @media (min-width: 600px) {
    max-width: 85%;
    background: rgb(0, 0, 0, 0.2);
  }
`;
