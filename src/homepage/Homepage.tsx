import { Parallax } from "@react-spring/parallax";
import { Biography } from "./bio/Biography";
import { ContactForm } from "./ContactForm.tsx/ContactForm";
import { ParallaxArt } from "./parallax-art/ParallaxArt";
import { Qualifications } from "./qualifications/Qualifications";
import { SalaryExpectation } from "./salary/SalaryExpectations";
import { WorkExperience } from "./work-experience/WorkExperience";
import { isClientSide } from "../../utils/isClientSide";
import { useRouter } from "next/router";

export const Homepage = () => {
	const router = useRouter();

	if (router.pathname === "/" && isClientSide()) {
		// React Spring Parallax adds second unremovable scrollbar
		document.body.style.overflow = "hidden";
	}

	return (
		<Parallax pages={6}>
			<ParallaxArt />

			<Biography />

			<Qualifications />

			<WorkExperience />

			<SalaryExpectation />

			<ContactForm />
		</Parallax>
	);
};
