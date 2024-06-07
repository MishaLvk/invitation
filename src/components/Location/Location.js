import {
  Container,
  Title,
  PointContainer,
  WeddingPoint,
  BanquetPoint,
  WeddingTime,
  ChurchContainer,
  ChurchIcon,
  PointTitle,
  Buffet,
  Ceremony,
  ChampaneContainer,
  ChampagneIcon,
  Text,
  BanquetContainer,
  BanquetIcon,
  CakePoint,
  CakeContainer,
  CakeIcon,
  RingContainer,
  RingIcon,
  TextPoint,
  TextLocation,
} from './Location.styled';
import iconChurch from '../Images/church.png';
import iconChampagne from '../Images/champagne.png';
import iconBanquet from '../Images/eat.png';
import iconCake from '../Images/cake.png';
import iconRing from '../Images/wedding-ring.png';

export default function Location() {
  return (
    <Container>
      <Title>Наш день</Title>
      <PointContainer>
        <WeddingPoint>
          <ChurchContainer>
            <ChurchIcon src={iconChurch} alt="icon" />
          </ChurchContainer>
          <Text>
            <WeddingTime>12:00</WeddingTime>
            <PointTitle>ЦЕРЕМОНІЯ ВІНЧАННЯ</PointTitle>
            <TextPoint>Храм св. ап. Петра і Павла</TextPoint>

            <TextLocation>Переглянути на карті</TextLocation>
          </Text>
        </WeddingPoint>
        <Buffet>
          <Text>
            <WeddingTime>13:45</WeddingTime>
            <PointTitle>ЗБІР ГОСТЕЙ НА ФУРШЕТ</PointTitle>
            <TextPoint>Stavky Country Club</TextPoint>
            <TextLocation>Переглянути на карті</TextLocation>
          </Text>
          <ChampaneContainer>
            <ChampagneIcon src={iconChampagne} alt="icon" />
          </ChampaneContainer>
        </Buffet>
        <Ceremony>
          <RingContainer>
            <RingIcon src={iconRing} alt="icon" />
          </RingContainer>
          <Text>
            <WeddingTime>14:15</WeddingTime>
            <PointTitle>ЦЕРЕМОНІЯ</PointTitle>
          </Text>
        </Ceremony>
        <BanquetPoint>
          <Text>
            <PointTitle>СВЯТКОВИЙ БАНКЕТ</PointTitle>
            <WeddingTime>14:00</WeddingTime>
          </Text>
          <BanquetContainer>
            <BanquetIcon src={iconBanquet} alt="icon" />
          </BanquetContainer>
        </BanquetPoint>
        <CakePoint>
          <CakeContainer>
            <CakeIcon src={iconCake} alt="icon" />
          </CakeContainer>
          <Text>
            <WeddingTime>21:00</WeddingTime>
            <PointTitle>РОЗРІЗАННЯ СВЯТКОВОГО ТОРТА</PointTitle>
          </Text>
        </CakePoint>
      </PointContainer>
    </Container>
  );
}
