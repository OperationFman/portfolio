import type { NextPage } from "next";
import Head from "next/head";
import {
	cloudMetaData,
	convictionMetaData,
	headerBlurb,
	toolsMetaData,
} from "../../src/datasources/SkillsMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { Convictions } from "../../src/skills/Convictions";
import { Languages } from "../../src/skills/languages/Languages";
import { SkillsColumn } from "../../src/skills/SkillsColumn";
import { Footer } from "../../utils/Footer";

export const Skills: NextPage = () => {
	const splitStringAtFullStop = (str: string) => {
		let splitStrings = str.split(".");

		return splitStrings.map((splitString, index) => {
			if (index === splitStrings.length - 1) {
				return splitString;
			} else {
				return splitString + ".";
			}
		});
	};

	const blurbArray = splitStringAtFullStop(headerBlurb);

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
				<div className='max-w-[600px] text-center mx-auto mb-12 pl-2 pr-2'>
					{blurbArray.map((sentence, index) => {
						return (
							<p key={index} className=''>
								{sentence}
							</p>
						);
					})}
				</div>

				<Languages />
				<div className='sm:flex sm:flex-row justify-evenly flex-wrap'>
					<SkillsColumn title='Tools' metaData={toolsMetaData} />
					<SkillsColumn title='Cloud' metaData={cloudMetaData} />
				</div>
				<Convictions
					title='Convictions'
					metaData={convictionMetaData}
					splitStringAtFullStop={splitStringAtFullStop}
				/>
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Skills;
