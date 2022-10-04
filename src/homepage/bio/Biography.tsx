import { Grid } from "@mui/material";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import useHeightDetect from "../../../utils/useHeightDetect";
import { PageContainer } from "../../global/PageContainer";
import { JumpToCard } from "../components/JumpToCard";
import { PageDownIcon } from "../components/PageDownIcon";
import { TitleSection } from "./TitleSection";

type BiographyType = {
	scrollTo: (page: number) => void;
};

export const Biography = (props: BiographyType) => {
	const { scrollTo } = props;

	const { isMobile } = useDeviceDetect();
	const { isShort } = useHeightDetect();

	const Headshot = () => {
		return (
			<Image
				src='/homepage/placeholder.png'
				width='480'
				height='300'
				alt='Head shot'
				placeholder={"empty"}
			/>
		);
	};

	const MobileBiography = () => {
		return (
			<>
				<TitleSection />
				<br />
				<Headshot />
			</>
		);
	};

	const DesktopBiography = () => {
		return (
			<>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<div
						style={{
							width: "50%",
							marginTop: "auto",
						}}>
						<TitleSection />
					</div>
					<div style={{ width: "50%" }}>
						<Headshot />
					</div>
				</div>
				{!isShort && (
					<div style={{ marginTop: "100px" }}>
						<Grid container spacing={3} justifyContent='center'>
							<JumpToCard
								text={"Experience"}
								scrollToPage={3}
								scrollTo={scrollTo}
							/>
							<JumpToCard
								text={"Expectations"}
								scrollToPage={4}
								scrollTo={scrollTo}
							/>
							<JumpToCard
								text={"Contact"}
								scrollToPage={5}
								scrollTo={scrollTo}
							/>
						</Grid>
					</div>
				)}
			</>
		);
	};

	return (
		<ParallaxLayer offset={1} factor={1}>
			<PageContainer styleOverrides={{ marginTop: "0px" }}>
				{isMobile ? <MobileBiography /> : <DesktopBiography />}
			</PageContainer>
			<PageDownIcon scrollTo={scrollTo} scrollToPage={2} />
		</ParallaxLayer>
	);
};
