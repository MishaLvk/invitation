import styled from 'styled-components';

export const Fon = styled.div`
  position: relative;
  display: block;
  margin: 0;
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 100vh;
`;

export const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

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

export const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 90%;
  height: 90%;
  top: 0;
`;
