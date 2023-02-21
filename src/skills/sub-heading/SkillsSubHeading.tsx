import styles from "./SkillsSubHeading.module.scss";

export const SkillsSubHeading = ({ title }: { title: string }) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
};
