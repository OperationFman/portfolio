import Image from "next/future/image";
import { useContext } from "react";
import { DarkMode } from "../../../themes/GlobalTheme";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { BioDescription } from "./BioDescription";

export const Biography = () => {
	const { isMobile } = useDeviceDetect();
	const darkMode = useContext(DarkMode);

	const selectedTheme = darkMode ? "dark" : "light";

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
			}}>
			<BioDescription />

			<ShowIf condition={!isMobile}>
				<div style={{ alignItems: "center" }}>
					<Image
						src={`/homepage/biography/headshot-${selectedTheme}.svg`}
						width='480'
						height='300'
						alt='Head shot'
					/>
				</div>
			</ShowIf>
		</div>
	);
};
