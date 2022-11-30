import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import { Aptitude } from "../../src/skills/Aptitude";
import { Cloud } from "../../src/skills/Cloud";
import { Languages } from "../../src/skills/languages/Languages";
import { Personality } from "../../src/skills/Personality";
import { Tools } from "../../src/skills/Tools";

export const Skills: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Skills - Franklin V Moon</title>
					name='Skills'
					content='List of all my skills, abilities and personality'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<PageContainer>
				<Languages />
				<div className='sm:flex sm:flex-row'>
					<Tools />
					<Cloud />
				</div>
				<div className='sm:flex sm:flex-row'>
					<Aptitude />
					<Personality />
				</div>
			</PageContainer>
		</div>
	);
};

export default Skills;
