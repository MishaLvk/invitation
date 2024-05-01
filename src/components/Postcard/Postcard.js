import Timing from 'components/Timing/Timing';
import { Container, Fon } from './Postcard.styled';
import Countdoun from 'components/Countdoun/Countdoun';
import Location from 'components/Location/Location';

export default function Postcard() {
  return (
    <Fon>
      <Countdoun />
      <Location />
      <Timing />
      <Container>
        <h1>Misha & Marta</h1>
      </Container>
    </Fon>
  );
}
