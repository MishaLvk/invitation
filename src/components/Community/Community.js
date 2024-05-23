import {
  Fon,
  Container,
  Content,
  Text,
  Line,
  BoxFoto,
  Constellation,
  TelegramIcon,
  TelegramLink,
} from './Community.styled';
import sakura from '../Images/sakura.jpg';
import iconTelegram from '../Images/telegram-png.png';
export default function Community() {
  return (
    <Fon>
      <Container>
        <BoxFoto>
          <Constellation src={sakura} alt="sakura" />
        </BoxFoto>
        <Content>
          <Line></Line>
          <Text>
            <span>
              Для швидкого обміну інформацією, фото та відео між нашими гостями
              ми створили групу в Telegram
            </span>
            <TelegramLink href="https://t.me/+wRvXmmguAhUzZjdi">
              {' '}
              <TelegramIcon src={iconTelegram} alt="icon" />
              Долучитися
            </TelegramLink>
          </Text>
        </Content>
      </Container>
    </Fon>
  );
}
