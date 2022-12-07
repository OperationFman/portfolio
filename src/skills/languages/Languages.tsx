import TerminalIcon from "@mui/icons-material/Terminal";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { LanguageColumn } from "./LanguagesColumn";
import { languagesMetaData } from "../../datasources/SkillsMetaData";
import { SkillSubHeading } from "../components/SkillSubHeading";

export const Languages = () => {
	const { isMobile } = useDeviceDetect();

	const [expandLanguages, setExpandLanguages] = useState(false);

	return (
		<div className='ml-15 mr-15 '>
			<SkillSubHeading title='Languages'>
				<TerminalIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent className='ml-5 md:ml-12'>
					<Grid
						wrap={isMobile ? "wrap" : "nowrap"}
						container
						spacing={{ xs: 0, sm: 2, lg: 12 }}
						justifyContent={"center"}>
						{languagesMetaData.map((columnData, index) => {
							return (
								<Grid item key={`${index} ${columnData.heading}`} sm={5} xs={0}>
									<LanguageColumn
										columnData={columnData}
										isExpanded={expandLanguages}
										isDeveloping={columnData.isDeveloping}
										isMobile={isMobile}
									/>
								</Grid>
							);
						})}
					</Grid>
				</CardContent>
				<ShowIf condition={!isMobile}>
					<div className='h-[50px] w-full flex justify-center'>
						<Button
							variant='text'
							color='baseGrey'
							className='w-full'
							onClick={() => {
								setExpandLanguages(!expandLanguages);
							}}>
							{expandLanguages ? "Less" : "More"}
						</Button>
					</div>
				</ShowIf>
			</Card>
		</div>
	);
};
