import styled from "@emotion/styled";
import UserBeep from "../../assets/user_bee.png";
import Hony from "../../assets/hony.png";
import { fonts } from "../../styles/typography";

const ContainerDeep = styled.div`
  display: flex;

  align-items: center;
  position: fixed;
  left: 20px;
  bottom: 20px;

  -webkit-text-stroke: 1px black; /* pintar borde */
  font-family: ${fonts.secondary};
`;

const DataBeep = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  background-color: rgb(0, 0, 0, 0.6);
  padding: 15px 15px 15px 30px;
  border-radius: 10px;
  z-index: 3;
`;

const ScoreDeep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ImgDeep = styled.img`
  width: 120px;
  height: 120px;
  z-index: 4;
`;

const ImgScore = styled.img`
  width: 50px;
  height: 50px;
`;

const Strong = styled.strong`
  font-size: 30px;
  font-weight: bold;
`;

const P = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: yellow;
`;

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
