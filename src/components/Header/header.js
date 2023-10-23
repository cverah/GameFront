import styled from "@emotion/styled";
import ImgHeader from "../../assets/header_bg.png";
import HeaderMenu from "../../assets/header_menu.png";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 130px;
  background-image: url(${ImgHeader});
  background-size: 100% 100%; // Ajusta el tamaño de la imagen al contenedor
  background-repeat: no-repeat;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  padding: 0 30px;
`;

export const ContainerMenu = styled.nav`
  display: flex;
  gap: 10px;
`;

export const ItemMenu = styled.div`
  cursor: pointer;
  width: fit-content;
  height: 80px;
  background-image: url(${HeaderMenu});
  background-size: 100% 100%; // Ajusta el tamaño de la imagen al contenedor
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  /* justify-content: center; */
`;

export const Img = styled.img`
  cursor: pointer;
  width: 80px;
  height: 80px;
  margin-top: 18px;
`;
export const P = styled.p`
  font-size: 24px;
  -webkit-text-stroke: 1px black; /* pintar borde */
  padding-right: 40px;
`;
