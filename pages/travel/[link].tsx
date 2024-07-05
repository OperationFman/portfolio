import { InferGetServerSidePropsType } from "next";
import { ErrorContent } from "../../utils/error/ErrorContent";
import { Head } from "next/document";
import { Footer } from "../../utils/footer/Footer";
import { TravelVideoMetaData } from "../../src/travel/types";
import { getTravelMetaDatByLink } from "../../src/travel/travelDataService";

type ServerSideContext = {
	params: { link: string | string[] | undefined };
};

const VideoContent = ({
	metaData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { title, year, link, created, restricted } =
		metaData as TravelVideoMetaData;

	if (!metaData) {
		return <ErrorContent />;
	}

	return (
		<>
            <script src="https://cdn.jsdelivr.net/npm/@mux/mux-player"></script>
			<h1>{title}</h1>
			<Footer />
		</>
	);
};

export const getServerSideProps = async (context: ServerSideContext) => {
	const { link } = context.params;

	if (typeof link !== "string") {
		throw new Error("Link param is invalid");
	}

	// Split the link and fid in the metaData

	const metaData = getTravelMetaDatByLink(link) ?? false;

	return {
		props: {
			metaData,
		},
	};
};

export default VideoContent;
