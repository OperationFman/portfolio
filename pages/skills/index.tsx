import type { NextPage } from "next";
import Head from "next/head";
import {
	cloudMetaData,
	convictionMetaData,
	toolsMetaData,
} from "../../src/datasources/SkillsMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { SkillsColumn } from "../../src/skills/SkillsColumn";
import { Languages } from "../../src/skills/languages/Languages";
import { Footer } from "../../utils/Footer";

export const Skills: NextPage = () => {
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

			<PageContainer>
				<Languages />
				<div className='sm:flex sm:flex-row justify-evenly flex-wrap'>
					<SkillsColumn title='Tools' metaData={toolsMetaData} />
					<SkillsColumn title='Convictions' metaData={convictionMetaData} />
					<SkillsColumn title='Cloud' metaData={cloudMetaData} />
				</div>
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Skills;
