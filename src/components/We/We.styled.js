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
  font-family: 'EB Garamond', 'Great Vibes', serif, cursive;
  font-weight: 500;
  font-size: 60pt;
  font-style: normal;
  margin: 0;
  @media screen and (min-width: 600px) {
    font-size: 60pt;
  }
`;

export const Title = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 3em;
  font-weight: 500;
  font-style: normal;

  color: white;
  margin-top: 30px;
  display: block;
  text-align: center;
`;
