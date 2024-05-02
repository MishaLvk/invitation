import Timing from 'components/Timing/Timing';
import { Fon } from './Postcard.styled';
import Countdoun from 'components/Countdoun/Countdoun';
import Location from 'components/Location/Location';
import We from 'components/We/We';

export default function Postcard() {
  return (
    <Fon>
      <We />
      <Location />
      <Timing />
      <Countdoun />
    </Fon>
  );
}
