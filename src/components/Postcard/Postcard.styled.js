import styled from 'styled-components';
import fon from '../Images/fon.jpg';

export const Fon = styled.div`
  margin: 0;
  width: 100%;
  background-image: url(${fon});
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  max-width: 90vw;
  height: 900px;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgb(0, 0, 0, 0.2);
  @media screen and (min-width: 600px) {
    max-width: 90vw;
    background: rgb(0, 0, 0, 0.2);
  }
`;
