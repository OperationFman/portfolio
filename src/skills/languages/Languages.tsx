import { Button, Card, CardContent, Grid } from "@mui/material";
import { useState } from "react";
import ShowIf from "../../../utils/ShowIf";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { languagesMetaData } from "../../datasources/SkillsMetaData";
import { MetaData } from "../types";
import { LanguagesColumn } from "./LanguagesColumn";

export const Languages = ({
	handleOpenModal,
}: {
	handleOpenModal: (payload: MetaData) => void;
}) => {
	const { isMobile } = useDeviceDetect();

	const [expandLanguages, setExpandLanguages] = useState(false);

	return (
		<div className='md:ml-12 md:mr-8 '>
			<div className='flex justify-center'>
				<h1 className='m-4 self-center'>Languages</h1>
			</div>
			<Card>
				<CardContent className='ml-12 sm:ml-5 md:ml-24 mb-14 sm:mb-0'>
					<Grid
						wrap={isMobile ? "wrap" : "nowrap"}
						container
						justifyContent='space-evenly'>
						{languagesMetaData.map((columnData, index) => {
							return (
								<Grid item key={`${index} ${columnData.title}`} sm={5}>
									<LanguagesColumn
										columnData={columnData}
										isExpanded={expandLanguages}
										isDeveloping={columnData.isDeveloping}
										isMobile={isMobile}
										handleOpenModal={handleOpenModal}
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
