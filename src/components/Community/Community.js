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
import we from '../Images/photo_we.jpg';
import iconTelegram from '../Images/telegram-png.png';
export default function Community() {
  return (
    <Fon>
      <Container>
        <BoxFoto>
          <Constellation src={we} alt="we" />
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
