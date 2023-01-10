import { Typography } from "@mui/material";
import Image from "next/future/image";
import { splitStringAtFullStop } from "../../../utils/splitStringAtFullStop";

export const ForYouCard = ({
	logo,
	title,
	paragraph,
}: {
	logo: string;
	title: string;
	paragraph: string;
}) => {
	const paragraphArray = splitStringAtFullStop(paragraph);

	return (
		<div className='w-[350px]'>
			<div className='flex flex-col items-center pt-8 pb-8 pl-6 pr-6'>
				<Typography variant='h5' align='center' sx={{ fontWeight: "bold" }}>
					<span style={{ color: "#1565C0" }}>{title}</span>
				</Typography>

				<div className='mt-6 h-[200px]'>
					{paragraphArray.map((sentence, index) => {
						return (
							<Typography
								key={index}
								align='center'
								variant='h6'
								style={{
									width: "100%",
									marginBottom: "30px",
								}}>
								{sentence}
							</Typography>
						);
					})}
				</div>

				<Image
					src={`/homepage/foryou/${logo}.svg`}
					alt={logo}
					width={60}
					height={60}
					className='mb-6'
				/>
			</div>
		</div>
	);
};
