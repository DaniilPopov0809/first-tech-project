export const formStyle = {
  maxWidth: "250px",
};

export const selectStyle = {
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: "18px",
  lineHeight: "22px",
  color: "var(--text-color)",
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--secondary-button-color)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--secondary-button-color)",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--primary-button-color)",
    borderRadius: "10px",
    borderWidth: "2px",
    boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
  },
  ".MuiSelect-icon": {
    padingTop: "10px",
    color: "var(--text-color)",
    fontSize: "28px",
  },
  "&.Mui-selected": {
    bgcolor: "var(--secondary-button-color)",
    minHeight: "auto",
  },
};

export const labelStyle = {
  padding: 0,
  textTransform: "uppercase",
  fontWeight: 600,
  color: "var(--text-color)",
  "&.Mui-focused": {
    color: "var(--text-color)",
  },
};

export const menuItemsStyle = {
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "22px",
  textTransform: "uppercase",
  color: "var(--text-color)",
  "&:hover, &:focus": { bgcolor: "var(--primary-button-color)" },
  "&.Mui-selected ": { bgcolor: "var(--secondary-button-color)" },
  "&.Mui-selected:hover, &.Mui-selected:focus ": {
    bgcolor: "var(--secondary-button-color)",
  },
};
