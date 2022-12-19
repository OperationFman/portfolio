import { Dialog } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import {
	cloudMetaData,
	convictionMetaData,
	headerBlurb,
	toolsMetaData,
} from "../../src/datasources/SkillsMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { SkillModal } from "../../src/skills/components/SkillModal";
import { Convictions } from "../../src/skills/Convictions";
import { Languages } from "../../src/skills/languages/Languages";
import { SkillsColumn } from "../../src/skills/SkillsColumn";
import { slideTransition } from "../../src/tutorials/components/filter/filterAnimations";
import { Footer } from "../../utils/Footer";
import { splitStringAtFullStop } from "../../utils/splitStringAtFullStop";

const Transition = slideTransition("right");

export const Skills: NextPage = () => {
	const blurbArray = splitStringAtFullStop(headerBlurb);

	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => {
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

			<Dialog
				open={showModal}
				TransitionComponent={Transition}
				onClose={() => setShowModal(false)}>
				<SkillModal setShowModal={setShowModal} />
			</Dialog>

			<PageContainer>
				<div className='max-w-[620px] text-center mx-auto mb-12 pl-2 pr-2'>
					{blurbArray.map((sentence, index) => {
						return (
							<p key={index} className=''>
								{sentence}
							</p>
						);
					})}
				</div>

				<Languages handleOpenModal={handleOpenModal} />
				<div className='sm:flex sm:flex-row justify-evenly flex-wrap'>
					<SkillsColumn title='Tools' metaData={toolsMetaData} />
					<SkillsColumn title='Cloud' metaData={cloudMetaData} />
				</div>
				<Convictions title='Convictions' metaData={convictionMetaData} />
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Skills;
