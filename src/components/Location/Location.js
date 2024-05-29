import {
  Container,
  Title,
  PointContainer,
  WeddingPoint,
  BanquetPoint,
  WeddingTime,
  BanquetTime,
  ChurchContainer,
  ChurchIcon,
  ChurchText,
} from './Location.styled';
import iconChurch from '../Images/church.png';

export default function Location() {
  return (
    <Container>
      <Title>Наш день</Title>
      <PointContainer>
        <WeddingPoint>
          <ChurchContainer>
            <ChurchIcon src={iconChurch} alt="icon" />
          </ChurchContainer>
          <ChurchText>
            <h3>ЦЕРЕМОНІЯ ВІНЧАННЯ</h3>
            <WeddingTime>12:00</WeddingTime>
            <br />
            <span>Храм св. ап. Петра і Павла</span>
            <br />
            <span>Переглянути на карті</span>
          </ChurchText>
        </WeddingPoint>
        <BanquetPoint>
          <BanquetTime>14:00</BanquetTime>
          <span>СВЯТКОВИЙ БАНКЕТ</span>
          <span>Stavky Country Club</span>
          <span>Переглянути на карті</span>
        </BanquetPoint>
      </PointContainer>
    </Container>
  );
}
