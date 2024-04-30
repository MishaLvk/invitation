import { Container } from 'components/Postcard/Postcard.styled';
import { Water, Drops } from './Timing.styled';

export default function Timing() {
  return (
    <Container>
      <Water>
        <Drops>
          <h2>Вінчання</h2>
          <p>12:00</p>
          <h2>Святкування</h2>
          <p>14:00</p>
        </Drops>
      </Water>
    </Container>
  );
}
