import styled from 'styled-components';

export const Fon = styled.div`
  position: relative;
  display: block;
  margin: 0;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 90vw;
  height: 100%;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  @media screen and (min-width: 600px) {
    max-width: 90vw;
  }
  @media screen and (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const Content = styled.div`
  display: block;
  margin-top: 10px;
`;

export const Calendar = styled.div`
  position: relative;
  z-index: 0;
  font-family: 'EB Garamond', 'Great Vibes', serif, cursive;
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
  color: #6d944a;
  margin-bottom: 40px;
`;

export const NamesTitle = styled.span`
  font-family: 'EB Garamond', 'Great Vibes', serif, cursive;
  font-weight: 500;
  font-style: normal;
  color: black;
  font-size: 1.2em;
  margin-bottom: 10px;
  display: block;
  text-align: center;
`;

export const Names = styled.span`
  font-family: 'Great Vibes', cursive;
  font-weight: 600;
  font-style: normal;
  color: black;
  font-size: 2.4em;
  margin: 0;
  display: block;
  text-align: center;
  color: #265624;
`;

export const Text = styled.div`
  font-family: 'EB Garamond', 'Great Vibes', serif, cursive;
  color: black;
  font-size: 1.2em;
  font-weight: 500;
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const TextBottom = styled.div`
  font-family: 'Great Vibes', cursive;
  color: black;
  font-size: 1.6em;
  font-weight: 500;
  display: block;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Line = styled.div`
  background-color: #463e27;
  width: 80%;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
`;

export const ConstellationFon = styled.div`
  width: 100%;
  height: 20vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(to bottom, #272d25 -5%, #e1dfdb 100%);
  @media screen and (min-width: 600px) {
    height: 75vh;
  }
`;

export const Constellation = styled.img`
  display: block;
  width: 65%;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1024px) {
    width: 25%;
  }
`;

export const OurDate = styled.div`
  color: #6f974b;
  font-weight: 700;
  display: block;
  position: relative;
`;

export const Mountains = styled.img`
  position: absolute;
  width: 100%;
  z-index: -1;
  opacity: 0.1;
  bottom: 0;
  @media screen and (min-width: 600px) {
    left: 27%;
    width: 55%;
  }
`;
export const OurDateHeart = styled.img`
  position: absolute;
  width: 50px;
  top: -35%;
  left: -50%;
`;

export const Month = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-weight: 700;
  font-style: normal;
  font-size: 2em;
  margin: 0;
  margin-bottom: 20px;
  color: #000000;
  text-align: center;
`;
