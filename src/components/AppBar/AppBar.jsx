import NavigationMenu from "../NavigationMenu/NavigationMenu";
import logo from "../../images/logo_tweet.png";
import { AppBar, Image } from "./AppBar.styled";
import { Link } from "react-router-dom";

const AppBarMenu = () => {
  return (
    <AppBar>
      <Link to="/">
        <Image src={logo} alt="Logo" width="40px" />
      </Link>
      <NavigationMenu />
    </AppBar>
  );
};

export default AppBarMenu;
