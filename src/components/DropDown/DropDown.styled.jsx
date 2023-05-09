export const formStyle = {
  width: "250px",
};

export const selectStyle = {
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: "18px",
  lineHeight: "22px",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#5cd3a8",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#5cd3a8",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#ebd8ff",
    borderRadius: "10px",
    borderWidth: "2px",
  },
  ".MuiSelect-icon": {
    color: "#373737",
    fontSize: "28px",
  },
  "&.Mui-selected": { bgcolor: "#5cd3a8", minHeight: "auto" },
};

export const labelStyle = {
  padding: 0,
  textTransform: "uppercase",
  fontWeight: 600,
  color: "#373737",
  "&.Mui-focused": {
    color: "#373737",
  },
};

export const menuItemsStyle = {
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "22px",
  textTransform: "uppercase",
  color: "#373737",
  "&:hover, &:focus": { bgcolor: "#ebd8ff" },
  "&.Mui-selected ": { bgcolor: "#5cd3a8" },
  "&.Mui-selected:hover, &.Mui-selected:focus ": { bgcolor: "#5cd3a8" },
};
