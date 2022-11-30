import TerminalIcon from "@mui/icons-material/Terminal";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";
import ShowIf from "../../utils/ShowIf";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { LanguageColumn } from "./LanguagesColumn";
import { languagesMetaData } from "../datasources/SkillsMetaData";

export const Languages = () => {
	const { isMobile } = useDeviceDetect();

	const [expandLanguages, setExpandLanguages] = useState(false);

	return (
		<div className='ml-15 mr-15 '>
			<div className='flex flex-row mb-0'>
				<div className='mr-2 md:mr-5 md:ml-3'>
					<TerminalIcon color='success' className='text-5xl' />
				</div>
				<h1 className='mt-0'>Languages</h1>
			</div>
			<Card>
				<CardContent className='ml-5 md:ml-12'>
					<Grid
						wrap={isMobile ? "wrap" : "nowrap"}
						container
						spacing={{ xs: 0, sm: 2, md: 5, lg: 12 }}
						justifyContent={"center"}>
						{languagesMetaData.map((columnData, index) => {
							return (
								<Grid item key={`${index} ${columnData.heading}`}>
									<LanguageColumn
										columnData={columnData}
										isExpanded={expandLanguages}
										developing={false}
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
