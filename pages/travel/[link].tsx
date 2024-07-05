import Image from "next/future/image";
import { InferGetServerSidePropsType } from "next";
import { ErrorContent } from "../../utils/error/ErrorContent";
import { Footer } from "../../utils/footer/Footer";
import { TravelVideoMetaData } from "../../src/travel/types";
import { getTravelMetaDataIndex } from "../../src/travel/travelDataService";
import styles from "../../src/travel/index.module.scss";
import ReactPlayer from "react-player";
import {
	publicCDNVideoUrl,
	travelVideoMetaData,
} from "../../src/datasources/TravelMetaData";
import { PageContainer } from "../../src/global/PageContainer";

type ServerSideContext = {
	params: { link: string | string[] | undefined };
};

const VideoContent = ({
	metaData,
	upNext,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { title, year, slug, restricted } = metaData as TravelVideoMetaData;

	const upNextMetaData = upNext as TravelVideoMetaData[];

	if (!metaData) {
		return <ErrorContent />;
	}

	return (
		<>
			<PageContainer>
				<ReactPlayer
					url={`${publicCDNVideoUrl}${slug}.mp4`}
					controls
					pip
					height='100%'
					width='100%'
				/>

				<h1 className={styles.title}>{title}</h1>
				<h2 className={styles.year}>{year}</h2>

				{upNextMetaData ? (
					upNextMetaData.map((dataItem) => {
						return <h1>{dataItem.title}</h1>;
					})
				) : (
					<h1>Thats it!</h1>
				)}
			</PageContainer>
			<Footer />
		</>
	);
};

export const getServerSideProps = async (context: ServerSideContext) => {
	const { link } = context.params;

	if (typeof link !== "string") {
		throw new Error("Link param is invalid");
	}

	const metaDataIndex = getTravelMetaDataIndex(link);

	return {
		props: {
			metaData: travelVideoMetaData[metaDataIndex],
			upNext: travelVideoMetaData.slice(metaDataIndex + 1),
		},
	};
};

export default VideoContent;
