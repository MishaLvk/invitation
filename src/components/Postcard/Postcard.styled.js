import styled from 'styled-components';
//import foto from '../Images/1-81.jpg';
//import fon from '../Images/fon.jpg';

export const Fon = styled.div`
  margin: 0;
  background-color: rgba(225, 223, 219, 1);
  width: 100%;
`;

export const Container = styled.div`
  max-width: 90vw;
  height: 90vh;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }
`;
