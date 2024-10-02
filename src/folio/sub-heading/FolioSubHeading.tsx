import styles from "./FolioSubHeading.module.scss";

export const FolioSubHeading = ({ title }: { title: string }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
};
