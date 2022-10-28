import { Grid, Typography } from "@mui/material";
import Image from "next/future/image";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { BioDescription } from "./BioDescription";
import { ForYouCard } from "./components/ForYouCard";

export const Biography = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginBottom: "150px",
				}}>
				<BioDescription />

				<ShowIf condition={!isMobile}>
					<div style={{ width: "40%", alignItems: "center" }}>
						<Image
							src='/homepage/placeholder.png'
							width='480'
							height='300'
							alt='Head shot'
						/>
					</div>
				</ShowIf>
			</div>
			<Typography
				variant='h3'
				align='center'
				style={{
					marginBottom: "25px",
					fontWeight: "bold",
				}}>
				What Can I Do For You?
			</Typography>

			<Grid container spacing={5} justifyContent='center'>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"code"}
						title={"Programming"}
						paragraph1={
							"Champion best practices like TDD, SOLID principles, Object Oriented design and Pair Programming."
						}
						paragraph2={"See Skills for more."}
					/>
				</Grid>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"design"}
						title={"Design"}
						paragraph1={"Crafting user interfaces, wireframes, and prototypes."}
						paragraph2={
							"Researching user needs and following design principles."
						}
					/>
				</Grid>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"postproduction"}
						title={"Post-Production"}
						paragraph1={
							"Producing, editing, color correcting, and rendering motion pictures."
						}
						paragraph2={
							"Skills include VFX, animation and game engine production."
						}
						paragraphGap={false}
					/>
				</Grid>
				<Grid item>
					<ForYouCard
						isMobile={isMobile}
						logo={"volunteer"}
						title={"Volunteering"}
						paragraph1={
							"Sharing knowledge and resources with those eager to learn but who do not have the means to pursue careers in technology."
						}
						paragraph2={"This is my life pursuit."}
						paragraphGap={false}
					/>
				</Grid>
			</Grid>

			<div style={{ height: "100vh" }} />
		</>
	);
};
