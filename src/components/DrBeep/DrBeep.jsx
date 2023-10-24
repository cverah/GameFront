import UserBeep from "../../assets/user_bee.png";
import Hony from "../../assets/hony.png";
import {
  ContainerDeep,
  DataBeep,
  ImgDeep,
  ImgScore,
  P,
  ScoreDeep,
  Strong,
} from "./dr_beep";

const DrBeep = () => {
  return (
    <ContainerDeep>
      <ImgDeep src={UserBeep} alt="" />
      <DataBeep>
        <Strong>DrBeepeep</Strong>
        <ScoreDeep>
          <ImgScore src={Hony} alt="" />
          <P>999,999</P>
        </ScoreDeep>
      </DataBeep>
      DrBeep
    </ContainerDeep>
  );
};

export default DrBeep;
