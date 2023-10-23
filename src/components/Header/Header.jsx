import styled from "@emotion/styled";
import ImgHeader from "../../assets/header_bg.png";
import HeaderMenu from "../../assets/header_menu.png";
import IconMenu from "../../assets/icon_menu.png";
import IconMenu2 from "../../assets/icon_menu2.png";

const ContainerHeader = styled.header`
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

const ContainerMenu = styled.nav`
  display: flex;
  gap: 10px;
`;

const ContainerOptions = styled.div`
  display: flex;
  gap: 10px;
`;

const ItemMenu = styled.div`
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

const Content = styled.div``;

const Img = styled.img`
  cursor: pointer;
  width: 80px;
  height: 80px;
  margin-top: 18px;
`;
const P = styled.p`
  font-size: 24px;
  -webkit-text-stroke: 1px black; /* pintar borde */
  padding-right: 40px;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <ContainerMenu>
        <ItemMenu>
          <Img src={IconMenu} alt="img-header" />
          <P>CONTINENTS</P>
        </ItemMenu>
        <ItemMenu>
          <Img src={IconMenu2} alt="img-header" />
          <P>INVENTORY</P>
        </ItemMenu>
        <ItemMenu>
          <Img src={IconMenu2} alt="img-header" />
          <P>MARKET</P>
        </ItemMenu>
        <ItemMenu>
          <Img src={IconMenu2} alt="img-header" />
          <P>EXCHANGE</P>
        </ItemMenu>
      </ContainerMenu>
      <ContainerMenu>
        <Img src={IconMenu} style={{ marginTop: "8px" }} alt="img-header" />
        <Img src={IconMenu2} style={{ marginTop: "8px" }} alt="img-header" />
      </ContainerMenu>
    </ContainerHeader>
  );
};

export default Header;
