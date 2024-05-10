import {
  Container,
  Title,
  PointContainer,
  WeddingPoint,
  BanquetPoint,
  WeddingTime,
  BanquetTime,
} from './Location.styled';
export default function Location() {
  return (
    <Container>
      <Title>Наш день</Title>
      <PointContainer>
        <WeddingPoint>
          <WeddingTime>12:00</WeddingTime>
          <span>ЦЕРЕМОНІЯ ВІНЧАННЯ</span>
          <span>Храм свв. апп. Петра і Павла</span>
          <span>Переглянути на карті</span>
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
