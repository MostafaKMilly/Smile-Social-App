import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SelectClass(props) {
  return (
    <FormControl fullWidth focused>
      <InputLabel id="classSelectLabel">السنة الدراسية</InputLabel>
      <Select
        labelId="classSelectLabel"
        label="السنة الدراسية"
        variant="standard"
        color="secondary"
        {...props}
      >
        <MenuItem value={"First"}>السنة الاولى</MenuItem>
        <MenuItem value={"Second"}>السنة الثانية</MenuItem>
        <MenuItem value={"Third"}>السنة الثالثة</MenuItem>
        <MenuItem value={"Fourth"}>السنة الرابعة</MenuItem>
        <MenuItem value={"Fifth"}>السنة الخامسة</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectClass;
