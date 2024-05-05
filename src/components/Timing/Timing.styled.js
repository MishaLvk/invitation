import styled from 'styled-components';

export const Fon = styled.div`
  position: relative;
  display: block;
  margin: 0;
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 90vw;
  height: 98vh;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }
`;

export const Content = styled.div`
  display: block;
  padding-top: 30px;
`;

export const Calendar = styled.div`
  max-width: 90%;
  font-size: 1.2em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-left: auto;
  margin-right: auto;
  justify-items: end;
  letter-spacing: 0.1em;
  font-variant: small-caps;
  text-align: center;
`;

export const Names = styled.span`
  color: black;
  font-size: 2em;
  font-weight: 500;
  display: block;
  text-align: center;
`;

export const Іnvitation = styled.span`
  color: black;
  font-size: 1em;
  font-weight: 500;
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Line = styled.div`
  background-color: white;
  width: 80%;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
`;
