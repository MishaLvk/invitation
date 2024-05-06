import {
  Fon,
  Container,
  Content,
  Calendar,
  Names,
  Text,
  Line,
  Constellation,
  OurDate,
  OurDateHeart,
  Month,
} from './Іnvitation.styled';
import BigDipper from '../Images/Big Dipper.png';
import Heart from '../Images/Heart.png';
export default function Іnvitation() {
  return (
    <Fon>
      <Container>
        <Constellation src={BigDipper} alt="Big Dipper" />
        <Content>
          <Names>Юнак та Леді!</Names>
          <Line></Line>
          <Text>
            <span>Є ПОДІЇ, ЯКІ ЗАЛИШАЮТЬСЯ В ПАМ'ЯТІ НА ВСЕ ЖИТТЯ.</span>
            <br />
            <span>
              І Є ЛЮДИ, З ЯКИМИ ХОЧЕТЬСЯ ЇХ РОЗДІЛИТИ. МИ З РАДІСТЮ ЗАПРОШУЄМО
              ВАС СТАТИ ЧАСТИНКОЮ НАШОЇ ОСОБЛИВОЇ ПОДІЇ!
            </span>
          </Text>
          <Month>Червень 2024</Month>
          <Calendar>
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
        </Content>
      </Container>
    </Fon>
  );
}
