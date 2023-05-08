import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
    return (
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tweets">Tweets</NavLink>
            </li>
          </ul>
    )
}

export default NavigationMenu;