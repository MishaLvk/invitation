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
  flex-direction: column;
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

export const Logo = styled.span`
  font-family: 'Great Vibes', cursive;
  font-weight: 400;

  font-size: 80pt;
  font-style: normal;
  margin: 0;
  margin-bottom: 70px;
  @media screen and (min-width: 600px) {
    font-size: 60pt;
  }
`;
export const TitleTa = styled.div`
  display: block;
  width: 100%;
  height: 25px;
  font-family: 'Great Vibes', cursive;
  font-size: 3em;
  font-weight: 400;
  font-style: normal;

  color: white;
  text-align: end;
  margin-top: -30px;
`;
export const Title = styled.div`
  font-family: 'Great Vibes', cursive;
  font-size: 3.5em;
  font-weight: 700;
  font-style: normal;

  color: white;

  display: block;
  text-align: center;
`;
