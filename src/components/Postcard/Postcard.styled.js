import styled from 'styled-components';
//import foto from '../Images/1-81.jpg';
//import fon from '../Images/fon.jpg';

export const Fon = styled.div`
  margin: 0;
  background-color: #fffafa;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 90vw;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }

  @media screen and (min-width: 1024px) {
    max-width: 500px;
  }
`;
