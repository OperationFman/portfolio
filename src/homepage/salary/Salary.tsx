import useDeviceDetect from "../../../utils/useDeviceDetect";
import { SubHeading } from "../SubHeading";
import { SalaryExpectationsSection } from "./SalaryExpectationsSection";

import styles from "./Salary.module.scss";

export const Salary = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<SubHeading text={"Salary"} />
			<div className={styles.headingGap} />
			<SalaryExpectationsSection isMobile={isMobile} />
		</>
	);
};
