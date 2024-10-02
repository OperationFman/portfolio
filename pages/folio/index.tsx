import { Dialog, ToggleButton, ToggleButtonGroup } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
	cloudMetaData,
	convictionMetaData,
	toolsMetaData,
} from "../../src/datasources/FolioMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { FolioModal } from "../../src/folio/modal/FolioModal";
import { Convictions } from "../../src/folio/convictions/Convictions";
import { Languages } from "../../src/folio/languages/Languages";
import { FolioColumn } from "../../src/folio/folio-column/FolioColumn";
import { MetaData } from "../../src/folio/types";
import { slideTransition } from "../../src/guides/components/filter/filterAnimations";
import { Footer } from "../../utils/footer/Footer";

import styles from "../../src/folio/index.module.scss";
import { projectMetaData } from "../../src/datasources/ProjectMetaData";
import { ProjectItem } from "../../src/folio/projects/ProjectItem";

const Transition: any = slideTransition("right");

export const Folio: NextPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalPayload, setModalPayload] = useState<MetaData>();
	const [alignment, setAlignment] = useState("skills");

	const handleOpenModal = (payload: MetaData) => {
		setModalPayload(payload);
		setShowModal(true);
	};

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string,
	) => {
		setAlignment(newAlignment);
	};

	const description =
		"Known Programming Languages, Cloud Tools and Convictions";

	return (
		<div>
			<Head>
				<title>Folio - Franklin V Moon</title>
				<meta name='Folio' content={description} />
				<link rel='icon' href='/favicon-green.ico' />
				<meta name='description' content={description} />
				<meta property='og:title' content='Franklin Von Moon Portfolio Folio' />
				<meta property='og:description' content={description} />
				<meta
					property='og:image'
					content='https://user-images.githubusercontent.com/42459707/217668161-4be6af5c-4a57-4eb3-807e-d6f8ccb008ce.png'
				/>
				<meta
					property='og:url'
					content='https://www.franklin-v-moon.dev/folio'
				/>
				<meta property='og:type' content='website' />
			</Head>

			<div className={styles.modalContainer}>
				<Dialog
					open={showModal}
					TransitionComponent={Transition}
					onClose={() => setShowModal(false)}>
					{FolioModal(setShowModal, modalPayload)}
				</Dialog>
			</div>

			<PageContainer>
				<div className={styles.pageToggle}>
					<ToggleButtonGroup
						color='success'
						value={alignment}
						exclusive
						onChange={handleChange}>
						<ToggleButton value='skills'>Skills</ToggleButton>
						<ToggleButton value='projects'>Projects</ToggleButton>
					</ToggleButtonGroup>
				</div>

				{alignment === "projects" ? (
					<>
						<main className={styles.heroText}>
							Below is some of the projects I've built or largely collaborated
							on with links to designs, repositories and deployments
						</main>
						{projectMetaData.map((dataItem, index) => {
							return <ProjectItem metaData={dataItem} key={index} />;
						})}
					</>
				) : (
					<>
						<main className={styles.heroText}>
							Select any of these languages or technologies listed to learn more
							about my current capabilities and level of involvement.
						</main>

						<Languages handleOpenModal={handleOpenModal} />
						<div className={styles.columnsContainer}>
							<FolioColumn
								title='Tools'
								metaData={toolsMetaData}
								handleOpenModal={handleOpenModal}
							/>
							<FolioColumn
								title='Cloud'
								metaData={cloudMetaData}
								handleOpenModal={handleOpenModal}
							/>
						</div>
						<Convictions title='Convictions' metaData={convictionMetaData} />
					</>
				)}
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Folio;
