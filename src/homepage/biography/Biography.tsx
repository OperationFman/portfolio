import Image from "next/future/image";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { BioDescription } from "./Description";

export const Biography = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}>
				<BioDescription />

				<ShowIf condition={!isMobile}>
					<div style={{ width: "50%", alignItems: "center" }}>
						<Image
							src='/homepage/placeholder.png'
							width='480'
							height='300'
							alt='Head shot'
						/>
					</div>
				</ShowIf>
			</div>
		</>
	);
};