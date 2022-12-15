import type { NextPage } from "next";
import Head from "next/head";
import {
	headerBlurb,
	cloudMetaData,
	convictionMetaData,
	toolsMetaData,
} from "../../src/datasources/SkillsMetaData";
import { PageContainer } from "../../src/global/PageContainer";
import { SkillsColumn } from "../../src/skills/SkillsColumn";
import { Languages } from "../../src/skills/languages/Languages";
import { Footer } from "../../utils/Footer";
import { Typography } from "@mui/material";

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
				<div className='w-[500px] text-center mx-auto mb-12'>
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
				<SkillsColumn title='Convictions' metaData={convictionMetaData} />
			</PageContainer>
			<Footer />
		</div>
	);
};

export default Skills;
