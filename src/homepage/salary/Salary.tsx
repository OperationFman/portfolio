import { SubHeading } from "../SubHeading";
import { SalaryExpectationsSection } from "./SalaryExpectationsSection";

import styles from "./Salary.module.scss";

export const Salary = () => {
	return (
		<>
			<SubHeading text={"Salary"} />
			<div className={styles.headingGap} />
			<SalaryExpectationsSection />
		</>
	);
};
