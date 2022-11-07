import { Card, FormGroup, Tooltip, Typography, Zoom } from "@mui/material";
import { useEffect, useState } from "react";
import { Gap } from "./components/Gap";
import { MoneyInput } from "./components/MoneyInput";
import { SalarySwitch } from "./components/SalarySwitch";

export const SalaryExpectationsSection = ({
	isMobile,
}: {
	isMobile: boolean;
}) => {
	const commaSeparate = (value: number) => {
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const EXPECTED_SALARY_WITH_NO_BENEFITS = 125000;
	const MINIMUM_LIVABLE_SALARY = 60000;

	const [values, setValues] = useState({
		fullyRemote: 8000,
		hybridRemote: 4000,
		flatHierarchy: 1000,
		teamBonding: 1000,
		ethical: 2000,
		workLifeBalance: 3000,
		internationalTravel: 500,
		stock: 10000,
		trainingAllowances: 2500,
		otherAllowances: 4000,
		internationalRelocation: 10000,
	});

	const [expectedSalary, setExpectedSalary] = useState(MINIMUM_LIVABLE_SALARY);

	const [fullyRemote, setFullyRemote] = useState(true);
	const [hybridRemote, setHybridRemote] = useState(false);
	useEffect(() => {
		if (fullyRemote) {
			setHybridRemote(false);
		}
	}, [fullyRemote]);
	useEffect(() => {
		if (hybridRemote) {
			setFullyRemote(false);
		}
	}, [hybridRemote]);

	const [flatHierarchy, setFlatHierarchy] = useState(true);
	const [teamBonding, setTeamBonding] = useState(true);
	const [ethical, setEthical] = useState(true);
	const [workLifeBalance, setWorkLifeBalance] = useState(true);
	const [internationalTravel, setInternationalTravel] = useState(true);
	const [fourDays, setFourDays] = useState(true);
	const [internationalRelocation, setInternationalRelocation] = useState(false);

	const handleMoneyInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	useEffect(() => {
		const calculateExpectedSalary = () => {
			let baseSalary = EXPECTED_SALARY_WITH_NO_BENEFITS;

			// TODO: Cleaner approach

			if (fourDays) {
				baseSalary = baseSalary * 0.8; // 20% reduction for 4 day work weeks
			}

			if (fullyRemote) {
				baseSalary = baseSalary - values.fullyRemote;
			}

			if (hybridRemote) {
				baseSalary = baseSalary - values.hybridRemote;
			}

			if (flatHierarchy) {
				baseSalary = baseSalary - values.flatHierarchy;
			}

			if (teamBonding) {
				baseSalary = baseSalary - values.teamBonding;
			}

			if (ethical) {
				baseSalary = baseSalary - values.ethical;
			}

			if (workLifeBalance) {
				baseSalary = baseSalary - values.workLifeBalance;
			}

			if (internationalTravel) {
				baseSalary = baseSalary - values.internationalTravel;
			}

			if (internationalRelocation) {
				baseSalary = baseSalary - values.internationalRelocation;
			}

			baseSalary = baseSalary - values.stock * 0.5; // 50% reduction
			baseSalary = baseSalary - values.trainingAllowances * 0.9; // 10% reduction
			baseSalary = baseSalary - values.otherAllowances * 0.8; // 20% reduction

			if (baseSalary < MINIMUM_LIVABLE_SALARY) {
				baseSalary = MINIMUM_LIVABLE_SALARY;
			}

			return baseSalary;
		};

		setExpectedSalary(calculateExpectedSalary());
	}, [
		fullyRemote,
		hybridRemote,
		flatHierarchy,
		teamBonding,
		ethical,
		workLifeBalance,
		internationalTravel,
		fourDays,
		values,
		internationalRelocation,
	]);

	return (
		<Card
			sx={{
				width: "100%",
				boxShadow: 5,
			}}>
			<Tooltip
				TransitionComponent={Zoom}
				title={"Australian Dollars"}
				enterTouchDelay={0}>
				<Typography
					variant='h3'
					align='center'
					style={{
						marginTop: "40px",
						fontWeight: "bold",
						color: "#90caf9",
					}}>
					${commaSeparate(expectedSalary)}
				</Typography>
			</Tooltip>

			<Typography
				variant='h5'
				align='center'
				style={{
					fontWeight: "bold",
					marginBottom: "20px",
				}}>
				Expected Annual Salary
			</Typography>

			<FormGroup>
				<div
					style={{
						display: isMobile ? "" : "flex",
					}}>
					<div style={{ flex: 1, marginLeft: isMobile ? "" : "50px" }}>
						<Gap />
						<SalarySwitch
							text={"Fully Remote Working"}
							checked={fullyRemote}
							onChange={() => setFullyRemote(!fullyRemote)}
							description={
								"Allows the employee complete flexibility to work from home or the office"
							}
						/>
						<SalarySwitch
							text={"Hybrid Remote Working"}
							checked={hybridRemote}
							onChange={() => setHybridRemote(!hybridRemote)}
							description={
								"The employee is mandated to work at the office some days of the week"
							}
						/>
						<Gap />
						<SalarySwitch
							text={"Flat Organizational Hierarchy"}
							checked={flatHierarchy}
							onChange={() => setFlatHierarchy(!flatHierarchy)}
							description={
								"An organization with few or no levels of management between staff and executives"
							}
						/>
						<SalarySwitch
							text={"Frequent Team Bonding"}
							checked={teamBonding}
							onChange={() => setTeamBonding(!teamBonding)}
							description={
								"Team dinners, meetup activities, companies retreats, conferences, fun days etc"
							}
						/>
						<SalarySwitch
							text={"Ethical / Socially Aware"}
							checked={ethical}
							onChange={() => setEthical(!ethical)}
							description={
								"The company prioritizes fair and equitable hiring & promoting practices. Works to improve quality of life for the world and makes morally 'good' decisions"
							}
						/>
						<SalarySwitch
							text={"Work Life Balance"}
							checked={workLifeBalance}
							onChange={() => setWorkLifeBalance(!workLifeBalance)}
							description={
								"Work culture that discourages >40 hour work weeks. Encourages employees to take breaks, annual leave and sick leave when required"
							}
						/>
						<SalarySwitch
							text={"International Travel"}
							checked={internationalTravel}
							onChange={() => setInternationalTravel(!internationalTravel)}
							description={"Opportunity to travel abroad as a part of the job"}
						/>
						<Gap />
					</div>
					<div
						style={{
							flex: 1,
						}}>
						<MoneyInput
							name={"stock"}
							title={"Stock Options / Shares"}
							value={values.stock}
							onChange={handleMoneyInputChange}
							description={
								"The value of public or private shares given to the employee, including restricted units (Annually)"
							}
						/>
						<Gap />
						<MoneyInput
							name={"trainingAllowances"}
							title={"Training Allowance"}
							value={values.trainingAllowances}
							onChange={handleMoneyInputChange}
							description={
								"E.g Conferences, courses, course material and classes (Annually)"
							}
						/>
						<MoneyInput
							name={"otherAllowances"}
							title={"All Other Allowances / Benefits"}
							value={values.otherAllowances}
							onChange={handleMoneyInputChange}
							description={
								"E.g Wellness, Laptop, Laptop Accessories, Books, Travel, Lunch, Dinners etc (Annually)"
							}
						/>
						<Gap />
						<SalarySwitch
							text={"4-Day Work Week"}
							checked={fourDays}
							onChange={() => setFourDays(!fourDays)}
							description={
								"The employee can work 4 x 8 hour work days per week for a 20% reduction in pay"
							}
						/>
						<SalarySwitch
							text={"International Relocation"}
							checked={internationalRelocation}
							onChange={() =>
								setInternationalRelocation(!internationalRelocation)
							}
							description={
								"Opportunity to relocate abroad long term or permanently"
							}
						/>
						<Gap />
					</div>
				</div>
			</FormGroup>
		</Card>
	);
};
