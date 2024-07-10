import {
  Fon,
  Container,
  Content,
  Text,
  BoxFoto,
  Peony,
} from './Flowers.styled';
import pion from '../Images/peony.png';

export default function Flowers(showPast) {
  return (
    <Fon>
      <Container>
        <BoxFoto>
          <Peony src={pion} alt="Peony" />
        </BoxFoto>
        <Content>
          {showPast.showPast ? (
            <Text>
              <span>
                Будь ласка, не турбуйтесь про квіти, ми не встигнемо
                насолодитись їхньою красою. Будемо вдячні, якщо замість квітів
                Ви подаруєте нам пляшку свого улюбленого напою для наших
                затишних сімейних вечорів
              </span>
            </Text>
          ) : (
            <Text>
              <span>
                На наше прохання, гості не турбувались про квіти, ми розуміли що
                не встигнемо насолодитись їхньою красою. Були вдячні, що замість
                квітів вони подарували нам пляшку свого улюбленого напою для
                наших затишних сімейних вечорів
              </span>
            </Text>
          )}
        </Content>
      </Container>
    </Fon>
  );
}
