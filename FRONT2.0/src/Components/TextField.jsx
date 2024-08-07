import React from 'react';
import TextField from '@mui/material/TextField';

function CustomTextField({ label, id, autoComplete, value, onChange }) {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name={id}
      label={label}
      id={id}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      sx={{
        "& label.Mui-focused": {
          color: "#07382E",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#07382E",
          },
          "&:hover fieldset": {
            borderColor: "#07382E",
          },
        },
      }}
    />
  );
}

export default CustomTextField;
