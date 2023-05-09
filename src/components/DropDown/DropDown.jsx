import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  formStyle,
  selectStyle,
  menuItemsStyle,
  labelStyle,
} from "./DropDown.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { filterCard } from "../../redux/filterSlice";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
});

const DropDown = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(filterCard(event.target.value));
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={formStyle}>
        <InputLabel id="demo-simple-select-label" sx={labelStyle}>
          Filter
        </InputLabel>
        <Select
          sx={selectStyle}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={"all"} sx={menuItemsStyle}>
            All
          </MenuItem>
          <MenuItem value={false} sx={menuItemsStyle}>
            Follow
          </MenuItem>
          <MenuItem value={true} sx={menuItemsStyle}>
            {" "}
            Followings
          </MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default DropDown;
