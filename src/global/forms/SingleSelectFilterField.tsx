import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Topic } from "../../Tutorials/types";
import { addTransparency } from "../../../utils/muiSpecificLogic";

type TopicFilterProps = {
  filter: Topic | undefined;
  setFilter: Dispatch<SetStateAction<Topic | undefined>>;
  dropDownData: Topic[];
};

type SingleSelectFilterField = TopicFilterProps & {
  label: string;
  defaultValue: string;
  highlightColor: string;
};

export const SingleSelectFilterField = (props: SingleSelectFilterField) => {
  const {
    label,
    defaultValue,
    filter,
    setFilter,
    dropDownData,
    highlightColor,
  } = props;

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

  const dropDownStyling = {
    "&:hover": {
      backgroundColor: `${addTransparency(highlightColor, 0.4)} !important`,
    },
    "&.Mui-selected": {
      backgroundColor: addTransparency(highlightColor, 0.2),
    },
  };

  return (
    <Box
      sx={{
        m: 2,
        width: 200,
        paddingTop: "20px",
      }}
    >
      <FormControl fullWidth>
        <InputLabel
          sx={{
            "&.Mui-focused": {
              color: highlightColor,
            },
          }}
        >
          Topic
        </InputLabel>
        <Select
          value={filter ? filter : defaultValue}
          label={label}
          onChange={handleChange}
          sx={{
            "&.Mui-focused": {
              "&& fieldset": {
                borderColor: highlightColor,
              },
            },
          }}
        >
          <MenuItem value={defaultValue} sx={dropDownStyling}>
            {defaultValue}
          </MenuItem>
          {dropDownData.map((item, index) => {
            return (
              <MenuItem key={index} value={item} sx={dropDownStyling}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
