import styled from 'styled-components';

import foto from '../Images/1-116.jpg';

export const Foto = styled.div`
  display: block;
  color: white;
  width: 100%;
  height: 100vh;
  background-image: url(${foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  padding-top: 10vh;
  max-width: 90vw;
  font-family: 'Great Vibes', cursive;
  font-weight: 700;
  font-style: normal;
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

export const Timer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 2em;
`;

export const Period = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 3em;
  margin: 0;
  margin-bottom: 35vh;
  @media screen and (min-width: 600px) {
    font-size: 4em;
    margin-bottom: 30vh;
  }
`;

export const CountdounText = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 1.2em;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  margin: 0;
`;
