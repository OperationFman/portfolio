import styles from "./SkillsSubHeading.module.scss";

export const SkillsSubHeading = ({ title }: { title: string }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	);
};
