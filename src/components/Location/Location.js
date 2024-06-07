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
  PointTitle,
  Ceremony,
  ChampaneContainer,
  ChampagneIcon,
  ChampaneText,
} from './Location.styled';
import iconChurch from '../Images/church.png';
import iconChampagne from '../Images/champagne.png';

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
            <PointTitle>ЦЕРЕМОНІЯ ВІНЧАННЯ</PointTitle>
            <WeddingTime>12:00</WeddingTime>

            <span>Храм св. ап. Петра і Павла</span>

            <span>Переглянути на карті</span>
          </ChurchText>
        </WeddingPoint>
        <Ceremony>
          <ChampaneText>
            <PointTitle>ЗБІР ГОСТЕЙ НА ФУРШЕТ</PointTitle>
            <WeddingTime>13:45</WeddingTime>
          </ChampaneText>
          <ChampaneContainer>
            <ChampagneIcon src={iconChampagne} alt="icon" />
          </ChampaneContainer>
        </Ceremony>
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
