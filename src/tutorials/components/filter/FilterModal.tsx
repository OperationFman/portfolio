import { DialogTitle, Divider } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import useDeviceDetect from "../../../../utils/useDeviceDetect";
import { SingleSelectFilterField } from "./singleselect/SingleSelectFilterField";
import {
	availableLanguages,
	availableTags,
	availableTopics,
} from "../../tutorialDataService";
import { Languages, Tags, Topic } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { MultiSelectFilterField } from "./multiselect/MultiSelectFilterField";

export const FilterModal = (
	topicFilter: Topic | undefined,
	setTopicFilter: React.Dispatch<React.SetStateAction<Topic | undefined>>,
	languagesFilter: Languages[],
	setFilteredLanguages: React.Dispatch<React.SetStateAction<Languages[]>>,
	tagsFilter: Tags[],
	setTagsFilter: React.Dispatch<React.SetStateAction<Tags[]>>,
	setShowFilterMenu: Dispatch<SetStateAction<boolean>>,
) => {
	const { isMobile } = useDeviceDetect();
	const tutorialPurple = "#ce93d8";

	return (
		<div
			style={
				isMobile
					? { margin: "10px 0px 50px 0px" }
					: { margin: "20px 50px 50px 50px" }
			}>
			<DialogTitle>
				<div className='flex justify-between items-center'>
					Filter
					<div className='cursor-pointer'>
						<CloseRoundedIcon
							color='disabled'
							onClick={() => setShowFilterMenu(false)}
						/>
					</div>
				</div>
			</DialogTitle>

			<Divider sx={{ borderColor: tutorialPurple }} />
			<SingleSelectFilterField
				label={"Topic"}
				defaultValue={"All"}
				filter={topicFilter}
				setFilter={setTopicFilter}
				dropDownData={availableTopics}
				highlightColor={tutorialPurple}
			/>
			<MultiSelectFilterField
				label={"Languages"}
				filter={languagesFilter}
				setFilter={setFilteredLanguages}
				dropDownData={availableLanguages}
				highlightColor={tutorialPurple}
			/>
			<MultiSelectFilterField
				label={"Tags"}
				filter={tagsFilter}
				setFilter={setTagsFilter}
				dropDownData={availableTags}
				highlightColor={tutorialPurple}
			/>
		</div>
	);
};
