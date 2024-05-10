import {
  Container,
  StyleBox,
  Title,
  MistyRose,
  Pink,
  Moccasin,
  NavajoWhite,
  LightGray,
  GhostWhite,
  Lavender,
  LightBlue,
} from './WeddingStyle.styled';
//import BigDipper from '../Images/Big Dipper.png';
//import Heart from '../Images/Heart.png';
export default function WeddingStyle() {
  return (
    <div>
      <Container>
        <Title>
          Для нас найважливіше - Ваша присутність, але нам буде дуже приємно,
          якщо чоловіки оберуть білі сорочки, а жінки дотримаються нашої
          кольорової гами
        </Title>
        <StyleBox>
          <Pink></Pink>
          <MistyRose></MistyRose>
          <Moccasin></Moccasin>
          <NavajoWhite></NavajoWhite>
          <LightGray></LightGray>
          <GhostWhite></GhostWhite>
          <Lavender></Lavender>
          <LightBlue></LightBlue>
        </StyleBox>
      </Container>
    </div>
  );
}
