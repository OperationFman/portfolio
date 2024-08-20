import type { NextPage } from "next";
import Head from "next/head";
import { projectMetaData } from "../../src/datasources/ProjectMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { ProjectItem } from "../../src/projects/ProjectItem";
import { Footer } from "../../utils/footer/Footer";

const Projects: NextPage = () => {
	const description =
		"Built projects, from front-end web apps demonstrating design skills to auto-scaling infrastructure deployments";
	return (
		<div>
			<Head>
				<title>Projects - Franklin V Moon</title>
				<meta name='Projects' content={description} />
				<link rel='icon' href='/favicon-red.ico' />
				<meta name='description' content={description} />
				<meta
					property='og:title'
					content='Franklin Von Moon Portfolio Projects'
				/>
				<meta property='og:description' content={description} />
				<meta
					property='og:image'
					content='https://user-images.githubusercontent.com/42459707/217668169-6b20fc51-78f9-448c-adc2-84a498b779f6.png'
				/>
				<meta
					property='og:url'
					content='https://www.franklin-v-moon.dev/projects'
				/>
				<meta property='og:type' content='website' />
			</Head>

			<PageContainer>
				{projectMetaData.map((dataItem, index) => {
					return <ProjectItem metaData={dataItem} key={index} />;
				})}
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Projects;
