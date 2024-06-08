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
            <WeddingTime>12:30</WeddingTime>
            <PointTitle>Церемонія вінчання</PointTitle>
            <TextPoint>Храм св. ап. Петра і Павла</TextPoint>

            <TextLocation
              href="https://maps.app.goo.gl/qRmjTwHpG8kTFLTS8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Переглянути на карті
            </TextLocation>
          </Text>
        </WeddingPoint>
        <Buffet>
          <Text>
            <WeddingTime>14:00</WeddingTime>
            <PointTitle>Збір гостей на фуршет</PointTitle>
            <TextPoint>Stavky Country Club</TextPoint>
            <TextLocation
              href="https://maps.app.goo.gl/DQgYJR9hhScZAc4ZA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Переглянути на карті
            </TextLocation>
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
            <WeddingTime>14:30</WeddingTime>
            <PointTitle>Церемонія та привітання</PointTitle>
          </Text>
        </Ceremony>
        <BanquetPoint>
          <Text>
            <WeddingTime>15:30</WeddingTime>
            <PointTitle>Святковий банкет</PointTitle>
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
            <PointTitle>Розрізання святкового торта</PointTitle>
          </Text>
        </CakePoint>
      </PointContainer>
    </Container>
  );
}
