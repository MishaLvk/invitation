import { useEffect, useState } from 'react';

import {
  Foto,
  Container,
  Timer,
  Period,
  Title,
  //CountdounText,
} from './Countdoun.styled';

export default function TimerUseNowStop() {
  const [now, setNow] = useState(Date.now());

  const interval = 1000;
  const countDown = 1719738000000 - now;

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

  //слова
  function getUnitLabel(value, unit) {
    const units = {
      second: ['секунда', 'секунди', 'секунд'],
      minute: ['хвилина', 'хвилини', 'хвилин'],
      hour: ['година', 'години', 'годин'],
      day: ['день', 'дні', 'днів'],
    };

    if (!units[unit]) return unit;

    const cases = [2, 0, 1, 1, 1, 2];
    const forms = units[unit];
    return forms[
      value % 100 > 4 && value % 100 < 20
        ? 2
        : cases[value % 10 < 5 ? value % 10 : 5]
    ];
  }
  //слова
  return (
    <Foto>
      <Container>
        <Timer>
          <Period>
            <span>{days}</span>
            <span>{getUnitLabel(days, 'day')}</span>
          </Period>
          <Period>
            <span>{hours}</span>
            <span>{getUnitLabel(hours, 'hour')}</span>
          </Period>
          <Period>
            <span>{minutes}</span>
            <span>{getUnitLabel(minutes, 'minute')}</span>
          </Period>
          <Period>
            <span>{seconds}</span>
            <span>{getUnitLabel(seconds, 'second')}</span>
          </Period>
        </Timer>
        <Title>... і ми будемо одружені</Title>
      </Container>
    </Foto>
  );
}
