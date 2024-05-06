import Іnvitation from 'components/Іnvitation/Іnvitation';
import { Fon } from './Postcard.styled';
//import Countdoun from 'components/Countdoun/Countdoun';
import Location from 'components/Location/Location';
import We from 'components/We/We';
import TimerUseNowStop from 'components/Countdoun/Countdoun';

export default function Postcard() {
  return (
    <Fon>
      <We />
      <Іnvitation />
      <Location />
      <TimerUseNowStop />
    </Fon>
  );
}
