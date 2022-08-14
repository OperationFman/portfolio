import { ParallaxLayer } from "@react-spring/parallax";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import { MobileQualifications } from "./MobileQualifications";

export const Qualifications = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <ParallaxLayer offset={2}>
      {isMobile ? (
        <MobileQualifications />
      ) : (
        <>
          <h1>Qualifications</h1>
          <ul>
            <li>Self taught - programming - journey to TW</li>
            <li>Designer - Abo coop</li>
            <li>Qualified - Bachelors/Masters - studies completed</li>
            <li>Volunteering - media literacy</li>
            <li>Post production</li>
            <li>Hardware - servers and repair work/goals</li>
          </ul>
        </>
      )}
    </ParallaxLayer>
  );
};
