import { Typography } from "@mui/material";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { SubHeading } from "../components/SubHeading";
import { SalaryExpectationsSection } from "./SalaryExpectationsSection";

export const Salary = () => {
	const { isMobile } = useDeviceDetect();

	return (
		<>
			<Typography
				variant='h6'
				align='center'
				style={{ marginTop: "250px", marginBottom: "250px" }}>
				-- Some SVG Art --
			</Typography>

			<SubHeading text={"Salary"} />

			<SalaryExpectationsSection isMobile={isMobile} />
		</>
	);
};
