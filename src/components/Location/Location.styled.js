import styled from 'styled-components';

export const Container = styled.div`
padding-top: 30px;
  max-width: 90vw;
  
  
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
  flex-direction: row;
  justify-content: space-around;
`;

export const ChurchContainer = styled.div`
  display: block;
  width: 120px;
  height: 120px;
`;
export const ChurchIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const ChurchText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  font-size: 1.3em;
`;

export const PointTitle = styled.h3`
  width: 30vw;
  margin: 0;
  text-align: center;
  font-size: 1em;
`;

export const BanquetPoint = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeddingTime = styled.span`
  font-size: 1em;
  font-weight: 500;
  text-align: end;
`;

export const BanquetTime = styled.span`
  font-size: 1em;
  font-weight: 500;
  text-align: end;
`;

export const Ceremony = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ChampaneContainer = styled.div`
  display: block;
  width: 120px;
  height: 120px;
`;

export const ChampagneIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const ChampaneText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  font-size: 1.3em;
`;
