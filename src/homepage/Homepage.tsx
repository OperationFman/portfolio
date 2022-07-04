import { Parallax } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { shouldShowScrollBar } from "../../utils/shouldShowScrollbar";
import { Biography } from "./bio/Biography";
import { ContactForm } from "./ContactForm.tsx/ContactForm";
import { ParallaxArt } from "./parallax-art/ParallaxArt";
import { Qualifications } from "./qualifications/Qualifications";
import { SalaryExpectation } from "./salary/SalaryExpectations";
import { WorkExperience } from "./work-experience/WorkExperience";

export const Homepage = () => {
  const router = useRouter();

  shouldShowScrollBar(router);

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
