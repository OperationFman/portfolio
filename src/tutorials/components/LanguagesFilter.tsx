import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Languages } from "../types";

type LanguagesFilter = {
  filteredLanguages: Languages[];
  setFilteredLanguages: Dispatch<SetStateAction<Languages[]>>;
  availableLanguages: Languages[];
};

export const LanguagesFilter = (props: LanguagesFilter) => {
  const { filteredLanguages, setFilteredLanguages, availableLanguages } = props;

  const handleChange = (event: SelectChangeEvent<Languages[]>) => {
    const {
      target: { value },
    } = event;

    setFilteredLanguages(value as Languages[]);
  };

  return (
    <div>
      <FormControl sx={{ m: 2, width: 300 }}>
        <InputLabel>Filter Languages</InputLabel>
        <Select
          multiple
          value={filteredLanguages}
          onChange={handleChange}
          input={<OutlinedInput label="Filter Languages" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 48 * 4.5 + 8,
                width: 300,
              },
            },
          }}
        >
          {availableLanguages.map((language) => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
