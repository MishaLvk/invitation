import {
  Container,
  StyleBox,
  Title,
  Palette,
  Image,
} from './WeddingStyle.styled';
import pink from '../Images/Pink.png';
import mistyRose from '../Images/MistyRose.png';
import moccasin from '../Images/Moccasin.png';
//import navajoWhite from '../Images/NavajoWhite.png';
import lightGray from '../Images/LightGray.png';
import ghostWhite from '../Images/GhostWhite.png';
import lavender from '../Images/Lavender.png';
import lightBlue from '../Images/LightBlue.png';
export default function WeddingStyle(showPast) {
  return (
    <div>
      <Container>
        {showPast.showPast ? (
          <Title>
            Для нас найважливіше - Ваша присутність, але нам буде дуже приємно,
            якщо чоловіки оберуть білі сорочки, а жінки дотримаються нашої
            кольорової гами
          </Title>
        ) : (
          <Title>
            Для нас найважливіше - присутність, але нам було дуже приємно, що
            чоловіки обрали білі сорочки, а жінки дотрималися нашої кольорової
            гами
          </Title>
        )}

        <div>
          <StyleBox>
            <Palette>
              <Image src={pink} alt="pink" />
            </Palette>
            <Palette>
              <Image src={mistyRose} alt="mistyRose" />
            </Palette>
            <Palette>
              <Image src={moccasin} alt="moccasin" />
            </Palette>{' '}
            <Palette>
              <Image src={lightGray} alt="lightGray" />
            </Palette>
            <Palette>
              <Image src={lavender} alt="lavender" />
            </Palette>
            <Palette>
              <Image src={ghostWhite} alt="ghostWhite" />
            </Palette>
            <Palette>
              <Image src={lightBlue} alt="lightBlue" />
            </Palette>
          </StyleBox>
        </div>
      </Container>
    </div>
  );
}
