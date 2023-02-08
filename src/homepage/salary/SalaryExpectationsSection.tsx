import { Button, Card, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
	EXPECTED_SALARY_WITH_NO_BENEFITS,
	GENERAL_ALLOWANCES,
	MINIMUM_LIVABLE_SALARY,
	salaryExpectations,
	STOCK_REDUCTION,
	TRAINING_ALLOWANCE,
} from "../../datasources/SalaryExpectationMetaData";
import { Gap } from "./components/Gap";
import { MoneyInput as SalaryInput } from "./components/SalaryInput";
import { SalarySwitch } from "./components/SalarySwitch";

import styles from "./Salary.module.scss";

export const SalaryExpectationsSection = () => {
	const commaSeparate = (value: number) => {
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const [values, setValues] = useState(salaryExpectations);

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

			baseSalary = baseSalary - stock * STOCK_REDUCTION; // 50% reduction
			baseSalary = baseSalary - trainingAllowance * TRAINING_ALLOWANCE; // 10% reduction
			baseSalary = baseSalary - otherAllowances * GENERAL_ALLOWANCES; // 20% reduction

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
		<Card className={styles.cardContainer}>
			<ScrollAnimation animateIn='fadeIn' animateOnce>
				<div className={styles.heading}>
					<div className={styles.salaryNumber}>
						${commaSeparate(expectedSalary)}
					</div>
					<div className={styles.salaryCurrency}>AUD</div>
				</div>

				<div className={styles.subHeading}>Proposed Annual Salary</div>

				<FormGroup>
					<div className={styles.formGroup}>
						<div className={styles.leftColumn}>
							<Gap />
							<SalarySwitch
								text={"Fully Remote"}
								checked={fullyRemote}
								onChange={() => setFullyRemote(!fullyRemote)}
								description={
									"Allows the employee complete flexibility to work from home or the office"
								}
							/>
							<SalarySwitch
								text={"Hybrid Remote"}
								checked={hybridRemote}
								onChange={() => setHybridRemote(!hybridRemote)}
								description={
									"The employee is mandated to work at the office some days of the week"
								}
							/>
							<Gap />

							<SalarySwitch
								text={"Ethical & Socially Aware"}
								checked={ethical}
								onChange={() => setEthical(!ethical)}
								description={
									"The company prioritizes fair hiring & promoting. Works to improve quality of life for the world and makes morally 'good' decisions"
								}
							/>
							<SalarySwitch
								text={"Strong Work-Life Balance"}
								checked={workLifeBalance}
								onChange={() => setWorkLifeBalance(!workLifeBalance)}
								description={
									"Employees are not expected to work outside of salaried hours and are encouraged to take breaks & holidays"
								}
							/>
							<SalarySwitch
								text={"Reoccurring Team Bonding"}
								checked={teamBonding}
								onChange={() => setTeamBonding(!teamBonding)}
								description={
									"Team dinners, meetup activities, game sessions, company retreats, conferences, fun days etc"
								}
							/>
							<SalarySwitch
								text={"Flat Organizational Hierarchy"}
								checked={flatHierarchy}
								onChange={() => setFlatHierarchy(!flatHierarchy)}
								description={
									"An organization with few or no levels of management between staff and executives"
								}
							/>
							<SalarySwitch
								text={"Travel Opportunities"}
								checked={internationalTravel}
								onChange={() => setInternationalTravel(!internationalTravel)}
								description={
									"Opportunity to travel abroad short-term as a part of the role"
								}
							/>
							<Gap />
						</div>
						<div className={styles.rightColumn}>
							<SalaryInput
								name={STOCK_OPTIONS}
								title={"Stock Options & Shares"}
								value={values.stock}
								onChange={handleMoneyInputChange}
								onClear={handleMoneyInputClear}
								description={
									"The value of public or private shares given to the employee, including restricted units"
								}
							/>
							<SalaryInput
								name={TRAINING_ALLOWANCES}
								title={"Training Allowance"}
								value={values.trainingAllowances}
								onChange={handleMoneyInputChange}
								onClear={handleMoneyInputClear}
								description={
									"Conferences, courses, course material, books and classes (Annually)"
								}
							/>
							<SalaryInput
								name={OTHER_ALLOWANCES}
								title={"Other Allowances / Benefits"}
								value={values.otherAllowances}
								onChange={handleMoneyInputChange}
								onClear={handleMoneyInputClear}
								description={
									"Standing desk, Ergonomic chair, Gym membership, Public transport card, Therapy, Friday lunch etc (Annually)"
								}
							/>
							<Gap />
							<SalarySwitch
								text={"International Relocation"}
								checked={internationalRelocation}
								onChange={() =>
									setInternationalRelocation(!internationalRelocation)
								}
								description={
									"Opportunities to relocate abroad long term or permanently"
								}
							/>
							<SalarySwitch
								text={"4-Day Work Week Allowed"}
								checked={fourDays}
								onChange={() => setFourDays(!fourDays)}
								description={
									"For a 20% reduction in pay the employee can work one less day each week"
								}
							/>
						</div>
					</div>
				</FormGroup>
				<div className={styles.clearAllContainer}>
					<Button
						variant='outlined'
						size='medium'
						onClick={() => handleClearAll()}
						disabled={disableClearAll}
						className={styles.clearAllButton}>
						Clear All
					</Button>
				</div>
				<Gap />
			</ScrollAnimation>
		</Card>
	);
};
