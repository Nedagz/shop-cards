import CardComponent from "./components/cards";
import iphoneImage from "./assets/images/iphone.png";
import appleWatchImage from "./assets/images/appleWatch.jpg";
import airpodsImage from "./assets/images/airpods.jpg";
import HeaderComponent from "./components/header";
import { Box, Container, Grid2 } from "@mui/material";

function App() {
  const cardList = [
    {
      id: 1,
      title: "iphone",
      caption:
        " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

      image: iphoneImage,
    },
    {
      id: 2,
      title: "apple watch",
      caption:
        " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

      image: appleWatchImage,
    },
    {
      id: 3,
      title: "airpods",
      caption:
        " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

      image: airpodsImage,
    },
  ];
  return (
    <Container>
      <HeaderComponent />
      <Grid2 container spacing={2} >
        {cardList.map((card) => (
          <CardComponent key={card.id} info={card} />
        ))}
      </Grid2>
    </Container>
  );
}

export default App;
