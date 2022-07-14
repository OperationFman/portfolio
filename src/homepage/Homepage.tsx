import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { Ref, useRef } from "react";
import { shouldShowScrollBar } from "../../utils/shouldShowScrollbar";
import { Biography } from "./bio/Biography";
import { ContactForm } from "./ContactForm.tsx/ContactForm";
import { ParallaxArt } from "./parallax-art/ParallaxArt";
import { Qualifications } from "./qualifications/Qualifications";
import { SalaryExpectation } from "./salary/SalaryExpectations";
import { WorkExperience } from "./work-experience/WorkExperience";

export const Homepage = () => {
  const router = useRouter();
  const ref = useRef<IParallax>(null!);

  shouldShowScrollBar(router);

  const scrollToCallback = (page: number) => {
    ref.current.scrollTo(page);
  };

  return (
    <Parallax pages={6} ref={ref}>
      <ParallaxArt />

      <Biography scrollToCallback={scrollToCallback} />

      <Qualifications />

      <WorkExperience />

      <SalaryExpectation />

      <ContactForm />
    </Parallax>
  );
};
