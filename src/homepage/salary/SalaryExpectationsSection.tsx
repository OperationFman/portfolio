import { Button, Card, FormGroup, Typography } from "@mui/material";
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
		ethical: 2050,
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
	const [internationalRelocation, setInternationalRelocation] = useState(true);

	const STOCK_OPTIONS = "stock";
	const TRAINING_ALLOWANCES = "trainingAllowances";
	const OTHER_ALLOWANCES = "otherAllowances";

	const [disableClearAll, setDisableClearAll] = useState(false);

	const handleMoneyInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	const handleMoneyInputClear = (fieldName: string) => {
		setValues({
			...values,
			[fieldName]: 0,
		});
	};

	const handleClearAll = () => {
		setFullyRemote(false);
		setHybridRemote(false);
		setFlatHierarchy(false);
		setTeamBonding(false);
		setEthical(false);
		setWorkLifeBalance(false);
		setInternationalTravel(false);
		setFourDays(false);
		setInternationalRelocation(false);
		setValues({
			...values,
			[STOCK_OPTIONS]: 0,
			[TRAINING_ALLOWANCES]: 0,
			[OTHER_ALLOWANCES]: 0,
		});
	};

	useEffect(() => {
		const calculateExpectedSalary = () => {
			let baseSalary = EXPECTED_SALARY_WITH_NO_BENEFITS;
			const stock = values.stock;
			const trainingAllowance = values.trainingAllowances;
			const otherAllowances = values.otherAllowances;

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

			baseSalary = baseSalary - stock * 0.5; // 50% reduction
			baseSalary = baseSalary - trainingAllowance * 0.9; // 10% reduction
			baseSalary = baseSalary - otherAllowances * 0.8; // 20% reduction

			if (baseSalary < MINIMUM_LIVABLE_SALARY) {
				baseSalary = MINIMUM_LIVABLE_SALARY;
			}

			if (baseSalary === EXPECTED_SALARY_WITH_NO_BENEFITS) {
				setDisableClearAll(true);
			} else {
				setDisableClearAll(false);
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
			<div style={{ display: "flex", justifyContent: "center" }}>
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
				<Typography
					variant='h6'
					align='left'
					style={{
						marginTop: "62px",
						fontWeight: "bold",
						color: "#90caf9",
					}}>
					AUD
				</Typography>
			</div>

			<Typography
				variant='h5'
				align='center'
				style={{
					fontWeight: "bold",
					marginBottom: "20px",
				}}>
				Proposed Annual Salary
			</Typography>

			<FormGroup>
				<div
					style={{
						display: isMobile ? "" : "flex",
					}}>
					<div style={{ flex: 1, marginLeft: isMobile ? "" : "50px" }}>
						<Gap />
						<SalarySwitch
							text={"Fully Remote"}
							checked={fullyRemote}
							onChange={() => setFullyRemote(!fullyRemote)}
							description={
								"Allows the employee complete flexibility to work from home or the office"
							}
							isMobile={isMobile}
						/>
						<SalarySwitch
							text={"Hybrid Remote"}
							checked={hybridRemote}
							onChange={() => setHybridRemote(!hybridRemote)}
							description={
								"The employee is mandated to work at the office some days of the week"
							}
							isMobile={isMobile}
						/>
						<Gap />

						<SalarySwitch
							text={"Ethical & Socially Aware"}
							checked={ethical}
							onChange={() => setEthical(!ethical)}
							description={
								"The company prioritizes fair hiring & promoting. Works to improve quality of life for the world and makes morally 'good' decisions"
							}
							isMobile={isMobile}
						/>
						<SalarySwitch
							text={"Strong Work-Life Balance"}
							checked={workLifeBalance}
							onChange={() => setWorkLifeBalance(!workLifeBalance)}
							description={
								"Employees are not expected to work outside of salaried hours and are encouraged to take breaks & holidays"
							}
							isMobile={isMobile}
						/>
						<SalarySwitch
							text={"Reoccurring Team Bonding"}
							checked={teamBonding}
							onChange={() => setTeamBonding(!teamBonding)}
							description={
								"Team dinners, meetup activities, game sessions, company retreats, conferences, fun days etc"
							}
							isMobile={isMobile}
						/>
						<SalarySwitch
							text={"Flat Organizational Hierarchy"}
							checked={flatHierarchy}
							onChange={() => setFlatHierarchy(!flatHierarchy)}
							description={
								"An organization with few or no levels of management between staff and executives"
							}
							isMobile={isMobile}
						/>
						<SalarySwitch
							text={"Travel Opportunities"}
							checked={internationalTravel}
							onChange={() => setInternationalTravel(!internationalTravel)}
							description={
								"Opportunity to travel abroad short-term as a part of the role"
							}
							isMobile={isMobile}
						/>
						<Gap />
					</div>
					<div
						style={{
							flex: 1,
						}}>
						<MoneyInput
							name={STOCK_OPTIONS}
							title={"Stock Options & Shares"}
							value={values.stock}
							onChange={handleMoneyInputChange}
							onClear={handleMoneyInputClear}
							description={
								"The value of public or private shares given to the employee, including restricted units"
							}
							isMobile={isMobile}
						/>
						<MoneyInput
							name={TRAINING_ALLOWANCES}
							title={"Training Allowance"}
							value={values.trainingAllowances}
							onChange={handleMoneyInputChange}
							onClear={handleMoneyInputClear}
							description={
								"Conferences, courses, course material, books and classes (Annually)"
							}
							isMobile={isMobile}
						/>
						<MoneyInput
							name={OTHER_ALLOWANCES}
							title={"Other Allowances / Benefits"}
							value={values.otherAllowances}
							onChange={handleMoneyInputChange}
							onClear={handleMoneyInputClear}
							description={
								"Standing desk, Ergonomic chair, Gym membership, Public transport card, Therapy, Friday lunch etc (Annually)"
							}
							isMobile={isMobile}
						/>
						<Gap />
						<SalarySwitch
							text={"International Relocation"}
							checked={internationalRelocation}
							onChange={() =>
								setInternationalRelocation(!internationalRelocation)
							}
							description={
								"Requirement or opportunity relocate abroad long term or permanently"
							}
							isMobile={isMobile}
						/>
						<SalarySwitch
							text={"4-Day Work Week Allowed"}
							checked={fourDays}
							onChange={() => setFourDays(!fourDays)}
							description={
								"For a 20% reduction in pay the employee can work one less day each week"
							}
							isMobile={isMobile}
						/>
					</div>
				</div>
			</FormGroup>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button
					variant='outlined'
					size='medium'
					onClick={() => handleClearAll()}
					disabled={disableClearAll}
					style={{ marginTop: isMobile ? "40px" : "" }}>
					Clear All
				</Button>
			</div>
			<Gap />
		</Card>
	);
};