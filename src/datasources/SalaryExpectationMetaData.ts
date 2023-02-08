export const EXPECTED_SALARY_WITH_NO_BENEFITS = 120000; // $120,000 AUD
export const MINIMUM_LIVABLE_SALARY = 60000; // $60,000 AUD - Final total cannot go lower than this value

export const STOCK_REDUCTION = 0.5; // 50% reduction on the value of stocks, shares and options
export const TRAINING_ALLOWANCE = 0.9; // 10% reduction on the value of training allowances
export const GENERAL_ALLOWANCES = 0.8; // 20% reduction on the value of general allowances

// Numbers represent AUD, e.g 8000 = $8,000aud
export const salaryExpectations = {
	fullyRemote: 8000,
	hybridRemote: 4000,
	flatHierarchy: 1000,
	teamBonding: 1000,
	ethical: 2050,
	workLifeBalance: 3000,
	internationalTravel: 500,
	stock: 0,
	trainingAllowances: 2500,
	otherAllowances: 4000,
	internationalRelocation: 10000,
};

// Edit button test and labels in ~/src/homepage/salary/SalaryExpectationsSection.tsx
