import Garden01 from "../../assets/garden01.jpg";
import Garden02 from "../../assets/garden02.jpg";
import Garden04 from "../../assets/garden04.jpg";
import Garden05 from "../../assets/garden05.jpg";
import {
  Card,
  Circle,
  Grid,
  Image,
  ItemEnter,
  ScrollWindow,
  Title,
} from "./scroll_card";

const ScrollCard = () => {
  const images = [
    Garden01,
    Garden02,
    Garden04,
    Garden05,
    Garden01,
    Garden02,
    Garden04,
  ];

  const colors = ["red", "yellow", "green", "blue", "orange", "black", "cyan"];
  const cardArray = Array.from({ length: 20 }, (_, index) => index);

  return (
    <ScrollWindow>
      <Grid>
        {cardArray.map((element) => {
          const randomIndex = Math.floor(Math.random() * images.length);
          return (
            <Card key={element}>
              <Image src={images[randomIndex]} alt="image" />
              <Title>Garden {element + 1}</Title>
              <Circle circleColor={colors[randomIndex]} />
              <ItemEnter>
                <p style={{ fontSize: "25px" }}>ENTER</p>
              </ItemEnter>
            </Card>
          );
        })}
      </Grid>
    </ScrollWindow>
  );
};

export default ScrollCard;
