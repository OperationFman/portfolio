import { NextPage } from "next";
import styles from "../../src/assets/index.module.scss";
import Head from "next/head";
import { PageContainer } from "../../src/global/PageContainer";
import { Footer } from "../../utils/footer/Footer";

const AssetsStore: NextPage = () => {
	const description = "Assets of any digital products I'm selling";
	return (
		<>
			<div className={styles.pageContainer}>
				<Head>
					<title>Assets Store - Franklin V Moon</title>
					<meta name='Assets' content={description} />
					<link rel='icon' href='/favicon-purple.ico' />
					<meta name='description' content={description} />
					<meta property='og:title' content='Franklin Von Moon Assets Store' />
					<meta property='og:description' content={description} />
					{/* <meta
						property='og:image'
						content='https://user-images.githubusercontent.com/42459707/217668165-2975c163-f020-4a13-a8d9-3087d043f834.png'
					/> */}
					<meta
						property='og:url'
						content='https://www.franklin-v-moon.dev/assets-store'
					/>
					<meta property='og:type' content='website' />
				</Head>

				<PageContainer>
					<></>
				</PageContainer>
			</div>
			<Footer />
		</>
	);
};

export default AssetsStore;
