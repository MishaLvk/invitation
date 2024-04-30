import styled from 'styled-components';
import rain from '../Images/water.png';
import drops from '../Images/drops.png';

export const Water = styled.div`
  width: 100vh;
  height: 100vh;
  background-image: url(${rain});
  background-size: 120%;
  animation: rain 0.3s linear infinite;

  @keyframes rain {
    0% {
      background-position: -10% -10%;
    }
    100% {
      background-position: 20% 100%;
    }
  }
`;

export const Drops = styled.div`
  color: white;
  width: 100vh;
  height: 100vh;
  background-image: url(${drops});
  background-size: 100%;
`;
