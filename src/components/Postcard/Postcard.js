import Іnvitation from 'components/Іnvitation/Іnvitation';
import { useState } from 'react';
import { Fon } from './Postcard.styled';
//import Countdoun from 'components/Countdoun/Countdoun';
import Location from 'components/Location/Location';
import We from 'components/We/We';
import TimerUseNowStop from 'components/Countdoun/Countdoun';
import WeddingStyle from 'components/WeddingStyle/WeddingStyle';
import Community from 'components/Community/Community';
import Flowers from 'components/Flowers/Flowers';

export default function Postcard() {
  const [showPast, setShowPast] = useState(false);

  const handleToggle = () => {
    console.log(showPast);
    setShowPast(!showPast);
  };

  return (
    <Fon>
      <We />
      <Іnvitation showPast={showPast} />
      <Location />
      <WeddingStyle showPast={showPast} />
      <Flowers showPast={showPast} />
      <Community />
      <TimerUseNowStop onToggle={handleToggle} showPast={showPast} />
    </Fon>
  );
}
