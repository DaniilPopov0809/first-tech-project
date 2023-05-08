import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { filterCard } from "../../redux/filterSlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(filterCard(event.target.value));
  };

  return (
    <FormControl style={{ width: "250px" }}>
      <InputLabel id="demo-simple-select-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={false}>Follow</MenuItem>
        <MenuItem value={true}>Followings</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropDown;
