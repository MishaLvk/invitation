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

  flex-direction: column;
  align-items: center;
  max-width: 90vw;
  height: 98vh;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
  padding-top: 35vh;
  @media screen and (min-width: 600px) {
    max-width: 44vw;
    padding-top: 14vh;
  }

  @media screen and (min-width: 900px) {
    max-width: 500px;
  }
`;

export const LogoContainer = styled.div`
  display: block;
  position: relative;
  width: 80vw;
  height: 80vw;
`;

export const LogoMisha = styled.div`
  font-family: 'Great Vibes', cursive;
  font-size: 5em;
  font-weight: 500;
  font-style: normal;
  width: 100%;
  height: 8vh;
  color: #fffafa;

  display: block;
  text-align: start;

  @media screen and (min-width: 600px) {
    height: 17vh;
  }

  @media screen and (min-width: 900px) {
    font-size: 7em;
    height: 17vh;
  }
`;
export const LogoMarta = styled.div`
  font-family: 'Great Vibes', cursive;
  font-size: 5em;
  font-weight: 500;
  font-style: normal;
  width: 100%;
  height: 8vh;
  color: #fffafa;

  display: block;
  text-align: end;
  @media screen and (min-width: 600px) {
    height: 17vh;
  }

  @media screen and (min-width: 900px) {
    font-size: 7em;
    height: 17vh;
  }
`;

export const Title = styled.div`
  font-family: 'Great Vibes', cursive;
  font-size: 2em;
  font-weight: 700;
  font-style: normal;
  height: 3vh;
  color: #fffafa;

  display: block;
  text-align: center;
  @media screen and (min-width: 600px) {
    height: 6vh;
  }

  @media screen and (min-width: 900px) {
    font-size: 4em;
    height: 9vh;
  }
`;
