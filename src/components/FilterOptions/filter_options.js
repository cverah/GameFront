import styled from "@emotion/styled";
import But1 from "../../assets/but1.png";
import ButOptions from "../../assets/but_options.png";
import { fonts } from "../../styles/typography";

export const ContainerOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
`;

export const ItemOptionsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ItemType = styled.div`
  cursor: pointer;
  width: 150px;
  height: 70px;
  background-image: url(${But1});
  background-size: 100% 100%; // Ajusta el tamaño de la imagen al contenedor
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.secondary};
  font-size: 20px;
  -webkit-text-stroke: 1px black; /* pintar borde */
`;
export const ItemOptionsLeft = styled.div`
  cursor: pointer;
  width: 150px;
  height: 70px;
  background-image: url(${ButOptions});
  background-size: 100% 100%; // Ajusta el tamaño de la imagen al contenedor
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: ${fonts.primary};
  -webkit-text-stroke: 1px black;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;
