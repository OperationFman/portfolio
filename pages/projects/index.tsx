import type { NextPage } from "next";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";
import { projectMetaData } from "../../src/datasources/ProjectMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { ProjectItem } from "../../src/projects/ProjectItem";
import { Footer } from "../../utils/Footer";

const Projects: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Projects - Franklin V Moon</title>
				<meta
					name='Projects'
					content='Built projects, from front-end web apps demonstrating design skills to auto-scaling infrastructure deployments'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<PageContainer>
				{projectMetaData.map((dataItem, index) => {
					return (
						<ScrollAnimation animateIn='fadeIn' animateOnce key={index}>
							<ProjectItem metaData={dataItem} />
						</ScrollAnimation>
					);
				})}
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Projects;
