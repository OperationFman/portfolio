import type { NextPage } from "next";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import { Convictions } from "../../src/skills/Convictions";
import { Cloud } from "../../src/skills/Cloud";
import { Languages } from "../../src/skills/languages/Languages";
import { Tools } from "../../src/skills/Tools";
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
					<Tools />
					<Cloud />
					<Convictions />
				</div>
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Skills;
