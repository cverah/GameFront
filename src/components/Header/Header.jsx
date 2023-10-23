import IconMenu from "../../assets/icon_menu.png";
import IconMenu2 from "../../assets/icon_menu2.png";
import { ContainerHeader, ContainerMenu, Img, ItemMenu, P } from "./header";

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
