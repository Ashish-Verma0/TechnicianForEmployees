import React, { useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
const names = [
  "Ac Mechanic",
  "Cooller Mechanic",
  "Bike Mechanic",
  "Car Mechanic",
  "Coaching Teacher",
  "Guard",
  "Plumber",
  "Electrician",
  "Cleaning",
  "Cooking",
];
export default function MultiSelect({ onChange, data }) {
  //   const [selectedNames, setSelectedNames] = useState([]);
  //   const handleChange = (e) => {
  //     setSelectedNames(e.target.value);
  //     skillsData(selectedNames);
  //   };
  return (
    <FormControl sx={{ m: 1, width: 455 }}>
      <InputLabel>Skills Select</InputLabel>
      <Select
        multiple
        value={data?.skills}
        onChange={onChange}
        name="skills"
        input={<OutlinedInput label="Multiple Select" />}
      >
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
