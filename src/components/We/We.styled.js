import styled from 'styled-components';
import foto from '../Images/1-81.jpg';

export const Fon = styled.div`
  margin: 0;
  color: white;
  width: 100%;
  height: 100vh;
  background-image: url(${foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
  height: 98vh;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }
`;

export const Logo = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-weight: 700;
  font-size: 80pt;
  font-style: normal;
  margin: 0;
  @media screen and (min-width: 600px) {
    font-size: 150pt;
  }
`;
