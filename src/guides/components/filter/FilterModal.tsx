import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button, DialogTitle, Divider, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import {
	availableLanguages,
	availableTags,
	availableTopics,
} from "../../guideDataService";
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
	disableClearAll: boolean,
	handleClearAll: () => void,
) => {
	const guidePurple = "#66bb6a";

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

			<Divider sx={{ borderColor: guidePurple }} />
			<SingleSelectFilterField
				label={"Topic"}
				defaultValue={"All"}
				filter={topicFilter}
				setFilter={setTopicFilter}
				dropDownData={availableTopics}
				highlightColor={guidePurple}
			/>
			<MultiSelectFilterField
				label={"Languages"}
				filter={languagesFilter}
				setFilter={setFilteredLanguages}
				dropDownData={availableLanguages}
				highlightColor={guidePurple}
			/>
			<MultiSelectFilterField
				label={"Tags"}
				filter={tagsFilter}
				setFilter={setTagsFilter}
				dropDownData={availableTags}
				highlightColor={guidePurple}
			/>

			<div className={styles.clearAllContainer}>
				<Button
					variant='outlined'
					color='success'
					size='medium'
					onClick={() => handleClearAll()}
					disabled={disableClearAll}>
					Clear All
				</Button>
			</div>
		</div>
	);
};
