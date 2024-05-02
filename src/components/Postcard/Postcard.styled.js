import styled from 'styled-components';
//import foto from '../Images/1-81.jpg';
//import fon from '../Images/fon.jpg';

export const Fon = styled.div`
  margin: 0;
  background-color: #e4ebf1;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 90vw;
  height: 90vh;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgb(0, 0, 0, 0.2);
  @media screen and (min-width: 600px) {
    max-width: 90vw;
    background: rgb(0, 0, 0, 0.2);
  }
`;
