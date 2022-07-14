import ArrowDownwardTwoTone from "@mui/icons-material/ArrowDownwardTwoTone";
import { Button } from "@mui/material";

type PageDownIconProps = {
  scrollToCallback: (page: number) => void;
  scrollToPage: number;
};

export const PageDownIcon = (props: PageDownIconProps) => {
  const { scrollToCallback, scrollToPage } = props;

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
        onClick={() => scrollToCallback(scrollToPage)}
      >
        {/*TODO: Animate pointing downwards. Idea: Like runway lights?*/}
        <ArrowDownwardTwoTone />
      </Button>
    </div>
  );
};
