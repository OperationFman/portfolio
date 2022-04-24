import { DialogTitle, Divider } from "@mui/material";
import useDeviceDetect from "../../../../utils/useDeviceDetect";
import { MultiSelectFilter } from "../../../global/forms/MultiSelectFilterField";
import { SingleSelectFilterField } from "../../../global/forms/SingleSelectFilterField";
import {
  availableLanguages,
  availableTags,
  availableTopics,
} from "../../tutorialDataService";
import { Languages, Tags, Topic } from "../../types";

export const FilterModal = (
  topicFilter: Topic | undefined,
  setTopicFilter: React.Dispatch<React.SetStateAction<Topic | undefined>>,
  languagesFilter: Languages[],
  setFilteredLanguages: React.Dispatch<React.SetStateAction<Languages[]>>,
  tagsFilter: Tags[],
  setTagsFilter: React.Dispatch<React.SetStateAction<Tags[]>>
) => {
  const { isMobile } = useDeviceDetect();
  const tutorialPurple = "#ce93d8";

  return (
    <div
      style={
        isMobile
          ? { margin: "10px 0px 50px 0px" }
          : { margin: "20px 50px 50px 50px" }
      }
    >
      <DialogTitle>{"Filter"}</DialogTitle>

      <Divider sx={{ borderColor: tutorialPurple }} />
      <SingleSelectFilterField
        label={"Topic"}
        defaultValue={"All"}
        filter={topicFilter}
        setFilter={setTopicFilter}
        dropDownData={availableTopics}
        highlightColor={tutorialPurple}
      />
      <MultiSelectFilter
        label={"Languages"}
        filter={languagesFilter}
        setFilter={setFilteredLanguages}
        dropDownData={availableLanguages}
        highlightColor={tutorialPurple}
      />
      <MultiSelectFilter
        label={"Tags"}
        filter={tagsFilter}
        setFilter={setTagsFilter}
        dropDownData={availableTags}
        highlightColor={tutorialPurple}
      />
    </div>
  );
};
