import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectM({
  label,
  handleChange,
  value,
  options,
  size = "small",
}) {
  return (
    <Box sx={{ minWidth: 100, minHeight: 10 }}>
      <FormControl fullWidth size={size}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options?.map((i, idx) => (
            <MenuItem key={idx + " " + i?.title} value={i?.value || i?.text}>
              {i?.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
