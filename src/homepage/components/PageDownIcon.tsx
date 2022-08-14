import ArrowDownwardTwoTone from "@mui/icons-material/ArrowDownwardTwoTone";
import { Button } from "@mui/material";
import useDeviceDetect from "../../../utils/useDeviceDetect";
import useHeightDetect from "../../../utils/useHeightDetect";

type PageDownIconProps = {
  scrollTo: (page: number) => void;
  scrollToPage: number;
};

export const PageDownIcon = (props: PageDownIconProps) => {
  const { scrollTo, scrollToPage } = props;
  const { isMobile } = useDeviceDetect();
  const { isShort } = useHeightDetect();

  if (isMobile || isShort) {
    return <></>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        width: "100vw",
        bottom: "50px",
      }}
    >
      <Button
        color={"baseGrey"}
        sx={{ width: "50px", height: "60px", borderRadius: "50%" }}
        onClick={() => scrollTo(scrollToPage)}
      >
        {/*TODO: Animate pointing downwards. Idea: Like runway lights?*/}
        <ArrowDownwardTwoTone />
      </Button>
    </div>
  );
};
