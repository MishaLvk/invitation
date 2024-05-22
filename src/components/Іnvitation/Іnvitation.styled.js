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
  max-width: 90vw;
  height: 100%;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }
`;

export const Content = styled.div`
  display: block;
  margin-top: 20px;
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

export const Constellation = styled.img`
  display: block;
  width: 50%;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const OurDate = styled.div`
  color: rgb(176, 109, 32);
  font-weight: 500;
  display: block;
  position: relative;
`;
export const OurDateHeart = styled.img`
  position: absolute;
  width: 50px;
  top: -35%;
  left: -60%;
`;

export const Month = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-weight: 700;
  font-style: normal;
  font-size: 2em;
  margin: 0;
  color: rgb(176, 109, 32);

  text-align: end;
`;
