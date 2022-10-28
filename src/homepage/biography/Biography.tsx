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
			<Typography
				variant='h3'
				align='center'
				style={{
					marginBottom: "20px",
					fontWeight: "bold",
				}}>
				What Can I Do For You?
			</Typography>

			<Grid container spacing={5} justifyContent='center'>
				<Grid item>
					<ForYouCard />
				</Grid>
				<Grid item>
					<ForYouCard />
				</Grid>
				<Grid item>
					<ForYouCard />
				</Grid>
				<Grid item>
					<ForYouCard />
				</Grid>
			</Grid>

			<div style={{ height: "100vh" }} />
		</>
	);
};
