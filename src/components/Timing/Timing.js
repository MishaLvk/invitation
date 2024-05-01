import { Container } from 'components/Postcard/Postcard.styled';
import { Drops } from './Timing.styled';

export default function Timing() {
  return (
    <Container>
      <Drops>
        <h2>Вінчання</h2>
        <p>12:00</p>
        <h2>Святкування</h2>
        <p>14:00</p>
      </Drops>
    </Container>
  );
}
