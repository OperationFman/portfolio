import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { Dispatch, SetStateAction } from "react";
import { Tags } from "../types";

type TagsFilter = {
  tagsFilter: Tags[];
  setTagsFilter: Dispatch<SetStateAction<Tags[]>>;
};

export const TagsFilter = (props: TagsFilter) => {
  const { tagsFilter, setTagsFilter } = props;

  const availableTags: Tags[] = Object.values(Tags);

  const handleChange = (event: SelectChangeEvent<Tags[]>) => {
    const {
      target: { value },
    } = event;

    setTagsFilter(value as Tags[]);
  };

  return (
    <div>
      <FormControl sx={{ m: 2, width: 300 }}>
        <InputLabel>Tags</InputLabel>
        <Select
          multiple
          value={tagsFilter}
          onChange={handleChange}
          input={<OutlinedInput label="Tags" />}
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
          {availableTags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
