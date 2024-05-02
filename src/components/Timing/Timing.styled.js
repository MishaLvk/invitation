import styled from 'styled-components';

export const Fon = styled.div`
  margin: 0;
  color: white;
  width: 100%;
  height: 100vh;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
//position: relative;
export const Container = styled.div`
  max-width: 90vw;
  height: 98vh;

  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgb(0, 0, 0, 0.1);
  @media screen and (min-width: 600px) {
    max-width: 90vw;
    background: rgb(0, 0, 0, 0.1);
  }
`;
//position: absolute;
export const Content = styled.div`
  width: 90%;
  height: 90%;
  top: 0;
`;
