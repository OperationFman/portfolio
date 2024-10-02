import type { NextPage } from "next";

import { Contact } from "../../src/homepage/contact/Contact";
import { Experience } from "../../src/homepage/experience/Experience";
import { ForYou } from "../../src/homepage/foryou/ForYou";
import { Qualifications } from "../../src/homepage/qualifications/Qualifications";
import { Salary } from "../../src/homepage/salary/Salary";

const Portfolio: NextPage = () => {
	return (
		<>
			<ForYou />
			<Experience />
			<Qualifications />
			<Salary />
			<Contact />
		</>
	);
};

export default Portfolio;
