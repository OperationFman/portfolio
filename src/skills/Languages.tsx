import TerminalIcon from "@mui/icons-material/Terminal";
import { Button, Card, CardContent, Grid } from "@mui/material";
import ShowIf from "../../utils/ShowIf";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { LanguageColumn } from "./LanguagesColumn";

export type ColumnData = {
	heading: string;
	tech: string[];
};

export const Languages = () => {
	const { isMobile } = useDeviceDetect();

	// Max 12 tech items per language
	const languagesMetaData: ColumnData[] = [
		{
			heading: "Javascript",
			tech: [
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
			],
		},
		{
			heading: "Python",
			tech: [
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
			],
		},
		{
			heading: "C#",
			tech: [
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
			],
		},
		{
			heading: "Misc.",
			tech: [
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
				"Typescript",
				"React",
				"React native",
				"NodeJS",
				"GraphQL",
				"NextJS",
			],
		},
	];

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
						container
						spacing={isMobile ? 5 : 12}
						justifyContent={isMobile ? "left" : "center"}>
						{languagesMetaData.map((columnData) => {
							return (
								<Grid item>
									<LanguageColumn
										columnData={columnData}
										key={columnData.heading}
										isExpanded={false}
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
						<Button variant='text' color='baseGrey' className='w-full'>
							More
						</Button>
					</div>
				</ShowIf>
			</Card>
		</div>
	);
};
