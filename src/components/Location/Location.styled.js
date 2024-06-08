import styled from 'styled-components';

export const Container = styled.div`

  max-width: 90vw;
  
  
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
 
  @media screen and (min-width: 600px) {
    max-width: 90vw;
   
`;

export const Title = styled.h2`
  font-family: 'Great Vibes', cursive;
  font-weight: 700;
  font-style: normal;
  font-size: 2em;
  margin: 0;
  margin-bottom: 20px;
  text-align: start;
`;

export const PointContainer = styled.div`
  display: block;
`;

export const WeddingPoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 25px;
`;

export const ChurchContainer = styled.div`
  display: block;
  width: 120px;
  height: 120px;
`;
export const ChurchIcon = styled.img`
  width: 100%;

  opacity: 0.7;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
`;

export const TextPoint = styled.p`
  color: rgb(176, 109, 32);
  font-size: 0.8em;
  font-weight: 500;
  text-align: center;
  margin: 0;
  color: #293622;
`;

export const TextLocation = styled.a`
  font-size: 0.5em;
  text-align: center;
  margin: 0;
`;

export const PointTitle = styled.h3`
  font-family: 'Great Vibes', cursive;
  font-weight: 700;
  width: 30vw;
  margin: 0;
  text-align: center;
  font-size: 1.3em;
  color: #293622;
`;

export const BanquetPoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 25px;
`;

export const WeddingTime = styled.span`
  font-family: 'Great Vibes', cursive;
  font-weight: 700;
  font-style: normal;
  font-size: 2em;
  margin: 0;
  color: #293622;
  text-align: end;
`;

export const Buffet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 25px;
`;
export const Ceremony = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 25px;
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

export const RingContainer = styled.div`
  display: flex;
  width: 120px;
`;

export const RingIcon = styled.img`
  width: 100%;
`;

export const BanquetContainer = styled.div`
  display: flex;
  width: 120px;
  flex-direction: column-reverse;
`;

export const BanquetIcon = styled.img`
  width: 100%;
  opacity: 0.7;
`;

export const CakePoint = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CakeContainer = styled.div`
  display: flex;
  width: 120px;
`;

export const CakeIcon = styled.img`
  width: 100%;
  opacity: 0.7;
`;
