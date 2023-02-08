import { Dialog } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
	cloudMetaData,
	convictionMetaData,
	toolsMetaData,
} from "../../src/datasources/SkillsMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { SkillModal } from "../../src/skills/modal/SkillModal";
import { Convictions } from "../../src/skills/convictions/Convictions";
import { Languages } from "../../src/skills/languages/Languages";
import { SkillsColumn } from "../../src/skills/skills-column/SkillsColumn";
import { MetaData } from "../../src/skills/types";
import { slideTransition } from "../../src/tutorials/components/filter/filterAnimations";
import { Footer } from "../../utils/footer/Footer";

import styles from "../../src/skills/index.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Transition: any = slideTransition("right");

export const Skills: NextPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalPayload, setModalPayload] = useState<MetaData>();

	const handleOpenModal = (payload: MetaData) => {
		setModalPayload(payload);
		setShowModal(true);
	};

	const description =
		"Known Programming Languages, Cloud Tools and Convictions";

	return (
		<div>
			<Head>
				<title>Skills - Franklin V Moon</title>
				<meta name='Skills' content={description} />
				<link rel='icon' href='/favicon-green.ico' />
				<meta name='description' content={description} />
				<meta
					property='og:title'
					content='Franklin Von Moon Portfolio Skills'
				/>
				<meta property='og:description' content={description} />
				<meta
					property='og:image'
					content='https://user-images.githubusercontent.com/42459707/217668161-4be6af5c-4a57-4eb3-807e-d6f8ccb008ce.png'
				/>
				<meta
					property='og:url'
					content='https://www.franklin-v-moon.dev/skills'
				/>
				<meta property='og:type' content='website' />
			</Head>

			<div className={styles.modalContainer}>
				<Dialog
					open={showModal}
					TransitionComponent={Transition}
					onClose={() => setShowModal(false)}>
					{SkillModal(setShowModal, modalPayload)}
				</Dialog>
			</div>

			<PageContainer>
				<ScrollAnimation animateIn='fadeIn' animateOnce>
					<main className={styles.heroText}>
						Select any of these languages or technologies listed to learn more
						about my current capabilities and level of involvement.
					</main>
				</ScrollAnimation>

				<Languages handleOpenModal={handleOpenModal} />
				<div className={styles.columnsContainer}>
					<SkillsColumn
						title='Tools'
						metaData={toolsMetaData}
						handleOpenModal={handleOpenModal}
					/>
					<SkillsColumn
						title='Cloud'
						metaData={cloudMetaData}
						handleOpenModal={handleOpenModal}
					/>
				</div>
				<Convictions title='Convictions' metaData={convictionMetaData} />
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Skills;
