import { Typography } from "@mui/material";
import Image from "next/future/image";

export const QualificationCard = ({
	logo,
	title,
	location,
}: {
	logo: string;
	title: string;
	location: string;
}) => {
	return (
		<div className='w-[340px] flex flex-col items-center pt-8 pb-8 pl-6 pr-6'>
			<Image
				src={`/homepage/qualifications/${logo}.svg`}
				alt={logo}
				width={50}
				height={50}
				className='mt-6'
			/>

			<Typography
				variant='h5'
				align='center'
				style={{
					marginTop: "20px",
					lineHeight: 1.5,
				}}>
				{title}
			</Typography>

			<Typography
				variant='h5'
				align='center'
				style={{
					marginTop: "20px",
					fontWeight: "bold",
					color: "#1565C0",
				}}>
				{location}
			</Typography>
		</div>
	);
};
