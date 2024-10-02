import type { NextPage } from "next";

import Head from "next/head";
import { PageContainer } from "../src/global/PageContainer";
import { HomeFooterImage } from "../src/homepage/homeFooter/HomeFooterImage";
import { ParallaxArt } from "../src/homepage/parallax-art/ParallaxArt";
import { Footer } from "../utils/footer/Footer";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import styles from "../src/homepage/homepage.module.scss";
import { useEffect, useState } from "react";
import { BioDescription } from "../src/homepage/biography/BioDescription";
import { projectMetaData } from "../src/datasources/ProjectMetaData";
import { ProjectItem } from "../src/projects/ProjectItem";
import Portfolio from "../src/homepage/Portfolio";
import Folio from "../src/folio/Skills";

const Home: NextPage = () => {
	const enum FolioKey {
		Portfolio = "portfolio",
		Skills = "skills",
		Projects = "projects",
	}

	const portfolioOptions = [
		FolioKey.Portfolio,
		FolioKey.Skills,
		FolioKey.Projects,
	];

	const [alignment, setAlignment] = useState("portfolio");

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const optionParam = searchParams.get("option");
		if (optionParam && portfolioOptions.includes(optionParam as FolioKey)) {
			setAlignment(optionParam);
		}
	}, []);

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string,
	) => {
		setAlignment(newAlignment);

		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set("option", newAlignment);

		window.history.replaceState(
			null,
			"",
			`${window.location.pathname}?${searchParams.toString()}`,
		);
	};

	const description =
		"Franklin is a full-stack software developer with a passion for user centric design, volunteering globally and advocating for social change";

	const SubPage = () => {
		switch (alignment) {
			case "portfolio":
				return <Portfolio />;
			case "skills":
				return <Folio />;
			case "projects":
				return (
					<div className={styles.projects}>
						{projectMetaData.map((dataItem, index) => {
							return <ProjectItem metaData={dataItem} key={index} />;
						})}
					</div>
				);
		}
	};

	return (
		<>
			<Head>
				<title>Homepage - Franklin V Moon</title>
				<link rel='icon' href='/favicon-blue.ico' />
				<meta name='Franklin Moon' content={description} />
				<meta name='description' content={description} />
				<meta property='og:title' content='Franklin Moon Portfolio' />
				<meta property='og:description' content={description} />
				<meta
					property='og:image'
					content='https://user-images.githubusercontent.com/42459707/217668142-6ad58600-1713-40de-915d-caa035ea098a.png'
				/>
				<meta property='og:url' content='https://www.franklin-v-moon.dev/' />
				<meta property='og:type' content='website' />
			</Head>
			<ParallaxArt />
			<PageContainer>
				<>
					<BioDescription />
					<div className={styles.pageToggle}>
						<ToggleButtonGroup
							color='primary'
							value={alignment}
							exclusive
							onChange={handleChange}>
							<ToggleButton value='portfolio'>Resume</ToggleButton>
							<ToggleButton value='skills'>Skills</ToggleButton>
							<ToggleButton value='projects'>Projects</ToggleButton>
						</ToggleButtonGroup>
					</div>
					<SubPage />
				</>
			</PageContainer>
			<HomeFooterImage />
			<Footer isHomepage />
		</>
	);
};

export default Home;
