import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Topic } from "../../src/tutorials/types";

type TopicFilterProps = {
  filter: Topic | undefined;
  setFilter: Dispatch<SetStateAction<Topic | undefined>>;
  dropDownData: Topic[];
};

type SingleSelectFilterField = TopicFilterProps & {
  label: string;
  defaultValue: string;
};

export const SingleSelectFilterField = (props: SingleSelectFilterField) => {
  const { label, defaultValue, filter, setFilter, dropDownData } = props;

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    if (value === defaultValue) {
      setFilter(undefined);
    } else {
      setFilter(value);
    }
  };

  return (
    <Box sx={{ m: 2, width: 200 }}>
      <FormControl fullWidth>
        <InputLabel>Topic</InputLabel>
        <Select
          value={filter ? filter : defaultValue}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={defaultValue}>{defaultValue}</MenuItem>
          {dropDownData.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
