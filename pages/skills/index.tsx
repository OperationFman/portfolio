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
import { Footer } from "../../utils/Footer";

import styles from "../../src/skills/index.module.scss";

const Transition: any = slideTransition("right");

export const Skills: NextPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [modalPayload, setModalPayload] = useState<MetaData>();

	const handleOpenModal = (payload: MetaData) => {
		setModalPayload(payload);
		setShowModal(true);
	};

	return (
		<div>
			<Head>
				<title>Skills - Franklin V Moon</title>
				<meta
					name='Skills'
					content='Known Programming Languages and Cloud Tools'
				/>
				<link rel='icon' href='/favicon.ico' />
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
				<div className={styles.heroText}>
					Click any of the technologies listed below to learn more about my
					current specific abilities, capabilities and level of involvement.
				</div>

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
