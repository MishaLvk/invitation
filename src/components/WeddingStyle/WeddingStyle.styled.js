import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-width: 90vw;
  height: 100%;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }
`;

export const StyleBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  justify-items: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    display: flex;
  }
`;

export const Title = styled.span`
  font-family: 'Great Vibes', cursive;
  font-weight: 600;
  font-style: normal;

  color: black;
  font-size: 1.9em;
  font-weight: 500;
  display: block;
  text-align: center;
`;

export const Palette = styled.div`
  display: block;
  width: 10vw;
  
@media screen and (min-width: 600px) {
    width: auto;

`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
