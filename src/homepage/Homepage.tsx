import { IParallax, Parallax } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { useRef } from "react";
import { shouldShowScrollBar } from "../../utils/shouldShowScrollbar";
import { Biography } from "./bio/Biography";
import { ContactForm } from "./contact/ContactForm";
import { ParallaxArt } from "./parallax-art/ParallaxArt";
import { Qualifications } from "./qualifications/Qualifications";
import { SalaryExpectation } from "./salary/SalaryExpectations";
import { WorkExperience } from "./work-experience/WorkExperience";

export const Homepage = () => {
  const router = useRouter();
  const ref = useRef<IParallax>(null!);

  shouldShowScrollBar(router);

  const scrollTo = (page: number) => {
    ref.current.scrollTo(page);
  };

  return (
    <Parallax pages={6} ref={ref}>
      <ParallaxArt scrollTo={scrollTo} />

      <Biography scrollTo={scrollTo} />

      <Qualifications />

      <WorkExperience />

      <SalaryExpectation />

      <ContactForm />
    </Parallax>
  );
};
