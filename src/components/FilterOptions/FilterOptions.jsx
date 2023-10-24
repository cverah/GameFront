import IconOptions from "../../assets/icon_options.png";
import Back from "../../assets/back.png";
import {
  ContainerOptions,
  Img,
  ItemOptionsLeft,
  ItemOptionsRight,
  ItemType,
} from "./filter_options";

const FilterOptions = () => {
  return (
    <ContainerOptions>
      <ItemOptionsRight>
        <Img src={Back} alt="" />
        <ItemType>
          <p>GREENHOUS</p>
        </ItemType>
      </ItemOptionsRight>
      <ItemOptionsLeft>
        <p>TYPE</p>
        <img src={IconOptions} alt="" />
      </ItemOptionsLeft>
    </ContainerOptions>
  );
};

export default FilterOptions;
