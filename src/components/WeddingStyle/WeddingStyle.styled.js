import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  max-width: 90vw;
  height: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
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
  margin-top: 30px;
  height: 25vw;

  justify-items: center;
  align-items: center;
`;

export const Title = styled.span`
  color: black;
  font-size: 1.2em;
  font-weight: 500;
  display: block;
  text-align: center;
`;

export const Pink = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #fcd5ce;
  border-radius: 50%;
`;

export const MistyRose = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #fce2e3;
  border-radius: 50%;
`;
export const Moccasin = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #f8e8b4;
  border-radius: 50%;
`;

export const NavajoWhite = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #ffc699;
  border-radius: 50%;
`;

export const LightGray = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #cadbbb;
  border-radius: 50%;
`;

export const GhostWhite = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #f6efff;
  border-radius: 50%;
`;

export const Lavender = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #e4ebf1;
  border-radius: 50%;
`;

export const LightBlue = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: #c5def2;
  border-radius: 50%;
`;

export const Line = styled.div`
  background-color: white;
  width: 80%;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
`;
