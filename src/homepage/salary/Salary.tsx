import { SubHeading } from "../SubHeading";
import { SalaryExpectationsSection } from "./SalaryExpectationsSection";

import ScrollAnimation from "react-animate-on-scroll";
import styles from "./Salary.module.scss";

export const Salary = () => {
	return (
		<ScrollAnimation animateIn='fadeIn' animateOnce>
			<SubHeading text={"Salary"} />
			<div className={styles.headingGap} />
			<SalaryExpectationsSection />
		</ScrollAnimation>
	);
};
