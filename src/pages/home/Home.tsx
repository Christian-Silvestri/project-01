import { Typography } from "@mui/material";
import { HomeWrapper } from "./styles";

const Home = () => {
  return (
    <HomeWrapper>
      <Typography variant="h3" textTransform={'uppercase'}>
        Discover Exclusive Deals and Top Picks from Around the Globe
      </Typography>
      <Typography>
        At DealSphere, we bring you the best products and unbeatable offers,
        carefully curated to elevate your shopping experience. Explore, compare,
        and find your perfect match — all in one place
      </Typography>
      <Typography>
        Welcome to DealSphere, your go-to platform for discovering the latest
        deals and must-have items from around the world. Whether you’re
        searching for cutting-edge tech, stylish fashion, or home essentials,
        we’ve got you covered. Our intuitive interface makes it easy to navigate
        through categories, compare products, and make informed decisions. Start
        exploring today and unlock a world of exclusive finds that you won’t
        want to miss.
      </Typography>
    </HomeWrapper>
  );
};

export default Home;
