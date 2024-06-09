import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  Fon,
  Container,
  Content,
  Calendar,
  NamesTitle,
  Names,
  Text,
  Line,
  ConstellationFon,
  Constellation,
  OurDate,
  OurDateHeart,
  Month,
  TextBottom,
  Mountains,
} from './Іnvitation.styled';
import BigDipper from '../Images/Big Dipper.png';
import Heart from '../Images/Heart.png';
import mountains from '../Images/mountains.png';
import guests from '../Guests.json';
export default function Іnvitation() {
  const { key } = useParams();
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuestData = async () => {
      try {
        const guest = guests[key];
        if (!guest) {
          throw new Error('Guest not found');
        }
        setGuestData(guest);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGuestData();
  }, [key]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!guestData) {
    return <div>No guest data found</div>;
  }

  return (
    <Fon>
      <ConstellationFon>
        <Constellation src={BigDipper} alt="Big Dipper" />
      </ConstellationFon>
      <Container>
        <Content>
          <NamesTitle>Дорогі</NamesTitle>
          <Names> {guestData.name}!</Names>
          <Line></Line>
          <Text>
            <p>
              Ми збираємо родинне та дружнє коло на нашому весіллі, тому саме Ви
              тримаєте в руках це запрошення. Ми з радістю запрошуємо Вас
              відсвяткувати день народження нашої сім'ї!
              {guestData.name === 'Ігор, Ольга та Владислав' && (
                <p>
                  Зважаючи на безпекову ситуацію в країні, ми не можемо
                  дозволити собі ризикувати нашими рідними, тому для Вас
                  заплановано окрему святкову зустріч на території Польщі, куди
                  буде делеговано наречену у супроводі батьків. Та з надією на
                  перемогу, залишаємо Вам весь план нашого весілля{' '}
                </p>
              )}
            </p>
          </Text>
          <Month>Червень 2024</Month>
          <Calendar>
            <Mountains src={mountains} alt="" />
            <div>Пн</div>
            <div>Вт</div>
            <div>Ср</div>
            <div>Чт</div>
            <div>Пт</div>
            <div>Сб</div>
            <div>Нд</div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>16</div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
            <div>24</div>
            <div>25</div>
            <div>26</div>
            <div>27</div>
            <div>28</div>
            <div>29</div>
            <OurDate>
              <OurDateHeart src={Heart} alt="" />
              30
            </OurDate>
          </Calendar>
          <TextBottom>
            <p>
              Є події, які залишаються в пам'яті на все життя. І є люди, з якими
              хочеться їх розділити.
            </p>
          </TextBottom>
        </Content>
      </Container>
    </Fon>
  );
}
