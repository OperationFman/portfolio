import { Card, FormGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Gap } from "./components/Gap";
import { SalarySwitch } from "./components/SalarySwitch";

export const SalaryExpectationsSection = ({
	isMobile,
}: {
	isMobile: boolean;
}) => {
	const valueOf = {
		fullyRemote: -8000,
		hybridRemote: -5000,
		flatHierarchy: -2000,
		exceptionalColleagues: -3000,
		teamBonding: -2000,
		ethical: -2000,
		workLifeBalance: -5000,
		internationalTravel: -20000,
	};

	const commaSeparate = (value: number) => {
		return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};

	const [expectedSalary, setExpectedSalary] = useState(61000);
	const [toggleAll, setToggleAll] = useState(true);

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
	const [exceptionalColleagues, setExceptionalColleagues] = useState(true);
	const [teamBonding, setTeamBonding] = useState(true);
	const [ethical, setEthical] = useState(true);
	const [workLifeBalance, setWorkLifeBalance] = useState(true);
	const [internationalTravel, setInternationalTravel] = useState(true);
	const [fourDays, setFourDays] = useState(true);

	// user to add:
	// - Phone/Book/Lunch allowances
	// - Training allowances
	// - Wellness allowances
	// - Stock Options
	// - Extra leave (User to enter extra days and then calc based off full year the amount to remove)

	// 4-day toggle work week to remove 20%

	// At the bottom allow a drop down that shows the algorithm calculation

	return (
		<Card
			sx={{
				width: "100%",
				boxShadow: 5,
			}}>
			<Typography
				variant='h3'
				align='center'
				style={{
					marginTop: "40px",
					fontWeight: "bold",
					color: "#1565C0",
				}}>
				${commaSeparate(expectedSalary)}
			</Typography>
			<Typography
				variant='h5'
				align='center'
				style={{
					fontWeight: "bold",
					marginBottom: "20px",
				}}>
				Expected Annual Salary ($AUD)
			</Typography>

			<FormGroup>
				<div
					style={{
						display: isMobile ? "" : "flex",
					}}>
					<div style={{ flex: 1, marginLeft: isMobile ? "" : "50px" }}>
						<SalarySwitch
							text={"Toggle all"}
							checked={toggleAll}
							onChange={() => alert("TBD")}
							description={"Enable/Disable all modifiers"}
						/>
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
							text={"Exceptional Colleagues"}
							checked={exceptionalColleagues}
							onChange={() => setExceptionalColleagues(!exceptionalColleagues)}
							description={
								"Remarkable co-workers that achieve great things, mentor one another and are supportive"
							}
						/>
						<SalarySwitch
							text={"Regular Team Bonding"}
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
						<Gap />
						<SalarySwitch
							text={"International Travel Opportunities"}
							checked={internationalTravel}
							onChange={() => setInternationalTravel(!internationalTravel)}
							description={
								"Opportunity for regular short-term assignments abroad or supports employees to relocate overseas long-term within the company"
							}
						/>
						<SalarySwitch
							text={"4-Day Work Week"}
							checked={fourDays}
							onChange={() => setFourDays(!fourDays)}
							description={
								"The employee can work 4 x 8 hour work days per week for an equal reduction in pay (20%)"
							}
						/>
					</div>
					<div
						style={{
							border: "2px solid red",
							flex: 1,
							marginRight: "50px",
						}}>
						<h1>What up?</h1>
						<h1>What up?</h1>
						<h1>What up?</h1>
						<h1>What up?</h1>
					</div>
				</div>
			</FormGroup>
		</Card>
	);
};
