import styled from 'styled-components';

export const Fon = styled.div`
  position: relative;
  display: block;
  margin: 0;
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 90vw;
  height: 25vh;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
    height: 60vh;
  }

  @media screen and (min-width: 900px) {
    max-width: 500px;
  }
`;

export const Content = styled.div`
  display: block;
  z-index: 1;
`;

export const Names = styled.span`
  font-family: 'Great Vibes', cursive;
  font-weight: 600;
  font-style: normal;
  color: black;
  font-size: 2em;
  margin: 0;
  display: block;
  text-align: center;
`;

export const Text = styled.div`
  font-family: 'EB Garamond', 'Great Vibes', serif, cursive;
  color: black;
  font-size: 1em;
  font-weight: 500;
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;

export const BoxFoto = styled.div`
  display: block;
  position: absolute;

  width: 30vw;
  height: 100%;

  margin-left: auto;
  margin-right: auto;
`;

export const Peony = styled.img`
  display: block;
  width: 120%;
  height: 100%;
  
  background-size: cover;
   opacity: 0.8;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 600px) {
    width: 65%;
`;
