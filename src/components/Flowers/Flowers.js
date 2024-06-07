import {
  Fon,
  Container,
  Content,
  Text,
  BoxFoto,
  Peony,
} from './Flowers.styled';
import pion from '../Images/peony.png';

export default function Flowers() {
  return (
    <Fon>
      <Container>
        <BoxFoto>
          <Peony src={pion} alt="Peony" />
        </BoxFoto>
        <Content>
          <Text>
            <span>
              Будь ласка, не турбуйтесь про квіти, ми не встигнемо насолодитись
              їхньою красою. Будемо вдячні, якщо замість квітів Ви подаруєте нам
              пляшку свого улюбленого напою для наших затишних сімейних вечорів{' '}
            </span>
          </Text>
        </Content>
      </Container>
    </Fon>
  );
}
