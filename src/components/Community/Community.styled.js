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
  background-color: #463e27;
  width: 80%;
  height: 2px;
  margin-left: auto;
  margin-right: auto;
`;

export const BoxFoto = styled.div`
  display: block;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`;

export const Constellation = styled.img`
  display: block;
  width: 120%;

  background-size: cover;
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

export const TelegramIcon = styled.img`
  display: block;
  width: 15px;
  height: 15px;
  margin: 0;
  margin-right: 10px;
`;

export const TelegramLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 140px;
  height: 30px;
  background-color: gray;
  text-decoration: none;
  color: white;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;
