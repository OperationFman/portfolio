import Image from "next/image";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { TitleSection } from "./TitleSection";

export const Biography = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
				}}>
				<div
					style={{
						width: isMobile ? "100%" : "50%",
						marginTop: "auto",
					}}>
					<TitleSection />
				</div>
				<ShowIf condition={!isMobile}>
					<div style={{ width: "50%" }}>
						<Image
							src='/homepage/placeholder.png'
							width='480'
							height='300'
							alt='Head shot'
						/>
					</div>
				</ShowIf>
			</div>
			<div style={{ height: "100vh" }} />
		</>
	);
};
