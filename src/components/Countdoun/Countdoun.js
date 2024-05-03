import { useEffect, useState } from 'react';

import { Foto, Container } from './Countdoun.styled';

export default function TimerUseNowStop() {
  const [now, setNow] = useState(Date.now());

  const interval = 1000;
  const countDown = 1719741600000 - now;

  const isCountEnd = countDown === 0;
  useEffect(() => {
    if (isCountEnd) {
      alert('Count down');
    }
    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [isCountEnd]);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(countDown / day);
  // Remaining hours
  const hours = Math.floor((countDown % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((countDown % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((countDown % day) % hour) % minute) / second);

  return (
    <Foto>
      <Container>
        day {days} hourse: {hours} minute {minutes} seconds {seconds}
      </Container>
    </Foto>
  );
}
/** 
export default function Countdoun() {
  return (
    
  );
}
**/
