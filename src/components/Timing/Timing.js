import { Video, Fon, Container, Content } from './Timing.styled';
import video from '../Video/video.mp4';

export default function Timing() {
  return (
    <Fon>
      <Video src={video} autoPlay loop muted />;
      <Container>
        <Content>
          <h2>Вінчання</h2>
          <p>12:00</p>
          <h2>Святкування</h2>
          <p>14:00</p>
        </Content>
      </Container>
    </Fon>
  );
}
