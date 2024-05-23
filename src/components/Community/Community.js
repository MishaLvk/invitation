import {
  Fon,
  Container,
  Content,
  Text,
  Line,
  Constellation,
  TelegramIcon,
  TelegramLink,
} from './Community.styled';
import BigDipper from '../Images/Big Dipper.png';
import iconTelegram from '../Images/telegram-png.png';
export default function Community() {
  return (
    <Fon>
      <Container>
        <Constellation src={BigDipper} alt="Big Dipper" />
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
