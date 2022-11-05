import { Typography } from "@mui/material";
import useDeviceDetect from "../../../utils/useDeviceDetect";
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

			<Typography
				variant='h3'
				align='center'
				style={{
					marginTop: "150px",
					marginBottom: "25px",
					fontWeight: "bold",
				}}>
				Salary
			</Typography>

			<SalaryExpectationsSection isMobile={isMobile} />
		</>
	);
};
