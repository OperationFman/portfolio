import useDeviceDetect from "../../../utils/useDeviceDetect";
import { SubHeading } from "../components/SubHeading";
import { SalaryExpectationsSection } from "./SalaryExpectationsSection";

export const Salary = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<SubHeading text={"Salary"} />
			<div className='mb-6' />
			<SalaryExpectationsSection isMobile={isMobile} />
		</>
	);
};
