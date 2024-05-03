import Timing from 'components/Timing/Timing';
import { Fon } from './Postcard.styled';
//import Countdoun from 'components/Countdoun/Countdoun';
import Location from 'components/Location/Location';
import We from 'components/We/We';
import TimerUseNowStop from 'components/Countdoun/Countdoun';

export default function Postcard() {
  return (
    <Fon>
      <We />
      <Location />
      <Timing />
      <TimerUseNowStop />
    </Fon>
  );
}
