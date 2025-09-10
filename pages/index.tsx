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
import { tabsData } from "../src/datasources/NavBarMetaData";

const Home: NextPage = () => {
	const enum FolioKey {
		Portfolio = "portfolio",
		Projects = "projects",
	}

	const portfolioOptions = [FolioKey.Portfolio, FolioKey.Projects];

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

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Franklin Von Moon",
		url: "https://www.franklin-v-moon.dev",
		jobTitle: "Software Engineer & Traveler",
		description: tabsData[0].pageDescription,
		sameAs: [
			"https://www.instagram.com/franklin.v.moon",
			"https://github.com/OperationFman",
			"https://www.linkedin.com/in/franklin-von-moon-23572518a/",
			"https://www.facebook.com/frank.moon.731/",
		],
	};

	const SubPage = () => {
		switch (alignment) {
			case "portfolio":
				return <Portfolio />;
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
				<title>Franklin Von Moon</title>
				<link rel='icon' href='/favicon-blue.ico' />
				<meta name='description' content={tabsData[0].pageDescription} />
				<meta property='og:title' content='Franklin Von Moon' />
				<meta property='og:description' content={tabsData[0].pageDescription} />
				<meta
					property='og:image'
					content='https://github.com/user-attachments/assets/63411a74-1521-4cd9-b9f8-a77124ecdfc5'
				/>
				<meta property='og:url' content='https://www.franklin-v-moon.dev/' />
				<meta property='og:type' content='website' />

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
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
							<ToggleButton value='portfolio'>Portfolio</ToggleButton>
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
