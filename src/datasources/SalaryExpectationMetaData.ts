export const EXPECTED_SALARY_WITH_NO_BENEFITS = 110000; // $120,000 AUD
export const MINIMUM_LIVABLE_SALARY = 60000; // $60,000 AUD - Final total cannot go lower than this value

export const STOCK_REDUCTION = 0.5; // 50% reduction on the value of stocks, shares and options
export const TRAINING_ALLOWANCE = 0.9; // 10% reduction on the value of training allowances
export const GENERAL_ALLOWANCES = 0.8; // 20% reduction on the value of general allowances

// Numbers represent AUD, e.g 8000 = $8,000aud
export const salaryExpectations = {
	fullyRemote: 6000,
	hybridRemote: 3000,
	flatHierarchy: 500,
	layoffFree: 2000,
	ethical: 2000,
	workLifeBalance: 3100,
	internationalTravel: 1000,
	stock: 0,
	trainingAllowances: 2000,
	otherAllowances: 2000,
	internationalRelocation: 15000,
};

// Edit button test and labels in ~/src/homepage/salary/SalaryExpectationsSection.tsx
