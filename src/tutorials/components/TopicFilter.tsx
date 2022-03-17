import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Topic } from "../types";

type TopicFilterProps = {
  setTopicFilter: Dispatch<SetStateAction<Topic | undefined>>;
  topicFilter: Topic | undefined;
};

export const TopicFilter = (props: TopicFilterProps) => {
  const { setTopicFilter: setTopicFilter, topicFilter } = props;
  const topics = Object.values(Topic);

  const handleChange = (event: SelectChangeEvent) => {
    const selectedTopic = event.target.value as string;
    if (selectedTopic === "All") {
      setTopicFilter(undefined);
    } else {
      setTopicFilter(selectedTopic as Topic);
    }
  };

  return (
    <Box sx={{ m: 2, width: 300 }}>
      <FormControl fullWidth>
        <InputLabel>Topic</InputLabel>
        <Select
          value={topicFilter ? topicFilter : "All"}
          label="Topic"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {topics.map((topic, index) => {
            return (
              <MenuItem key={index} value={topic}>
                {topic}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
