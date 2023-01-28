import { useContext } from "react";

import { DarkMode } from "../../themes/GlobalTheme";

export const setDark = (
	styles: {
		readonly [key: string]: string;
	},
	selector: string,
) => {
	const isDarkMode = useContext(DarkMode);
	const addDarkClass = isDarkMode ? styles[`${selector}Dark`] : "";
	return `${styles[selector]} ${addDarkClass}`;
};
