import styled from 'styled-components';

export const Container = styled.div`
padding-top: 30px;
  max-width: 90vw;
  
  font-size: 40px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
 
  @media screen and (min-width: 600px) {
    max-width: 90vw;
   
`;

export const Title = styled.h2`
  color: rgb(176, 109, 32);
  font-size: 0.7em;
  text-align: start;
`;

export const PointContainer = styled.div`
  display: block;
`;

export const WeddingPoint = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BanquetPoint = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeddingTime = styled.span`
  font-size: 2em;
  font-weight: 500;
  text-align: end;
`;

export const BanquetTime = styled.span`
  font-size: 2em;
  font-weight: 500;
  text-align: end;
`;
