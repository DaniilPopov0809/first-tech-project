
import { List, Item, Link } from "./NavigationMenu..styled";

const NavigationMenu = () => {
  return (
    <nav>
      <List>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/tweets">Tweets</Link>
        </Item>
      </List>
    </nav>
  );
};

export default NavigationMenu;
