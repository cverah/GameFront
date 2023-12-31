import styled from "@emotion/styled";
import CardButton from "../../assets/card_button.png";
import { fonts } from "../../styles/typography";

export const ScrollWindow = styled.div`
  max-width: 85%;
  max-height: 65vh;
  overflow: auto; /* permite el desbordamiento vertical y muestra barras de desplazamiento si es necesario */
  margin: 0 auto;
  border-radius: 10px;
  padding: 8px 16px;
  border: 4px solid orange;
  background-color: rgb(232, 228, 159, 0.8);
  font-size: 40px;

  /* Estilos de la barra de desplazamiento */
  &::-webkit-scrollbar {
    width: 12px; /* Ancho de la barra de desplazamiento */
    background-color: #caaa50;
    margin-right: 10px;
  }

  /* Estilos del "pulgón" (la parte arrastrable de la barra) */
  &::-webkit-scrollbar-thumb {
    background-color: #d0624e; /* Color del "pulgón" */
    border-radius: 6px; /* Radio de borde del "pulgón" */
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;
export const Card = styled.div`
  border: 5px solid white;
  border-radius: 50px 50px 10px 10px;
  position: relative;
  height: auto;
  background-color: white;
  -webkit-text-stroke: 1px black; /* pintar borde */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Image = styled.img`
  border-radius: 50px 50px 0 0;
  position: relative;
`;

export const Title = styled.h4`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 30px;
  left: 50%; /* Centra horizontalmente el círculo */
  transform: translate(-50%, -250%);
  z-index: 1; /* Asegura que el círculo esté sobre la imagen */
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.circleColor};
  position: absolute;
  border: 2px solid white;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; /* Asegura que el círculo esté sobre la imagen */
`;

export const ItemEnter = styled.div`
  cursor: pointer;
  margin-top: 10px;
  height: 70px;
  background-image: url(${CardButton});
  background-size: 100% 100%; // Ajusta el tamaño de la imagen al contenedor
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fonts.secondary};
  font-size: 20px;
`;
