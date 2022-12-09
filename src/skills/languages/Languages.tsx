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
		<div className='md:ml-12 md:mr-8 '>
			<SkillSubHeading
				title='Languages'
				align={isMobile ? "justify-center" : "justify-start"}>
				<TerminalIcon color='success' className='text-5xl' />
			</SkillSubHeading>
			<Card>
				<CardContent className='ml-12 sm:ml-5 md:ml-24 mb-14 sm:mb-0'>
					<Grid
						wrap={isMobile ? "wrap" : "nowrap"}
						container
						justifyContent='space-evenly'>
						{languagesMetaData.map((columnData, index) => {
							return (
								<Grid item key={`${index} ${columnData.heading}`} sm={5}>
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
