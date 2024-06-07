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
            <PointTitle>ЦЕРЕМОНІЯ ВІНЧАННЯ</PointTitle>
            <WeddingTime>12:00</WeddingTime>

            <TextPoint>Храм св. ап. Петра і Павла</TextPoint>

            <TextLocation>Переглянути на карті</TextLocation>
          </Text>
        </WeddingPoint>
        <Buffet>
          <Text>
            <PointTitle>ЗБІР ГОСТЕЙ НА ФУРШЕТ</PointTitle>
            <WeddingTime>13:45</WeddingTime>
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
            <PointTitle>ЦЕРЕМОНІЯ</PointTitle>
            <WeddingTime>14:15</WeddingTime>
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
            <PointTitle>РОЗРІЗАННЯ СВЯТКОВОГО ТОРТА</PointTitle>
            <WeddingTime>21:00</WeddingTime>
          </Text>
        </CakePoint>
      </PointContainer>
    </Container>
  );
}
