import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-width: 90vw;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 10px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }
`;

export const StyleBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  color: black;
  font-size: 1.2em;
  font-weight: 500;
  display: block;
  text-align: center;
`;

export const Palette = styled.div`
  display: block;
  width: 15vw;
  
@media screen and (min-width: 600px) {
    width: auto;

`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
