import { PageContainer } from "../../global/PageContainer";
import { QualificationAccordion } from "./accordions/QualificationAccordion";

export const MobileQualifications = () => {
  return (
    <PageContainer styleOverrides={{ marginTop: "0px" }}>
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "lighter",
        }}
      >
        Qualifications
      </h1>
      <QualificationAccordion />
    </PageContainer>
  );
};
