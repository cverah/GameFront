import { fonts } from "../../styles/typography";
import styled from "@emotion/styled";

export const ContainerDeep = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 20px;
  bottom: 20px;
  cursor: pointer;
  -webkit-text-stroke: 1px black; /* pintar borde */
  font-family: ${fonts.secondary};
`;

export const DataBeep = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  background-color: rgb(0, 0, 0, 0.6);
  padding: 15px 15px 15px 30px;
  border-radius: 10px;
  z-index: 3;
`;

export const ScoreDeep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ImgDeep = styled.img`
  width: 120px;
  height: 120px;
  z-index: 4;
`;

export const ImgScore = styled.img`
  width: 50px;
  height: 50px;
`;

export const Strong = styled.strong`
  font-size: 30px;
  font-weight: bold;
`;

export const P = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: yellow;
`;
