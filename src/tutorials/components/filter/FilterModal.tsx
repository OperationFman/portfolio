import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { DialogTitle, Divider, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import {
	availableLanguages,
	availableTags,
	availableTopics,
} from "../../tutorialDataService";
import { Languages, Tags, Topic } from "../../types";
import { MultiSelectFilterField } from "./multiselect/MultiSelectFilterField";
import { SingleSelectFilterField } from "./singleselect/SingleSelectFilterField";

import styles from "./FilterModal.module.scss";

export const FilterModal = (
	topicFilter: Topic | undefined,
	setTopicFilter: React.Dispatch<React.SetStateAction<Topic | undefined>>,
	languagesFilter: Languages[],
	setFilteredLanguages: React.Dispatch<React.SetStateAction<Languages[]>>,
	tagsFilter: Tags[],
	setTagsFilter: React.Dispatch<React.SetStateAction<Tags[]>>,
	setShowFilterMenu: Dispatch<SetStateAction<boolean>>,
) => {
	const tutorialPurple = "#ce93d8";

	return (
		<div className={styles.container}>
			<DialogTitle>
				<div className={styles.titleContainer}>
					Filter
					<IconButton
						aria-label='Close'
						onClick={() => setShowFilterMenu(false)}>
						<CloseRoundedIcon color='disabled' />
					</IconButton>
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
