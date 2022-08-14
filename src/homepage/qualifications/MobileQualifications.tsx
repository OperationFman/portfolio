import { PageContainer } from "../../global/PageContainer";
import { QualificationAccordion } from "./accordions/QualificationAccordion";

export const MobileQualifications = () => {
  const styles = {
    subHeading: {
      fontSize: "50px",
      fontWeight: "lighter",
    },
  };

  return (
    <PageContainer styleOverrides={{ marginTop: "0px" }}>
      <h1 style={styles.subHeading}>Qualifications</h1>
      <QualificationAccordion />
    </PageContainer>
  );
};
