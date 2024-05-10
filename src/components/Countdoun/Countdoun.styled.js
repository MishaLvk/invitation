import styled from 'styled-components';

import foto from '../Images/1-116.jpg';

export const Foto = styled.div`
  display: block;
  color: white;
  width: 100%;
  height: 100vh;
  background-image: url(${foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
padding-top: 50px;
  max-width: 90vw;
  
  font-size: 40px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
 
  @media screen and (min-width: 600px) {
    max-width: 90vw;
   
  
`;

export const Timer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 0.7em;
`;

export const Period = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1em;
`;
