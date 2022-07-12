import ArrowDownwardTwoTone from "@mui/icons-material/ArrowDownwardTwoTone";
import { Button } from "@mui/material";

export const PageDownIcon = () => {
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
      >
        {/*TODO: Animate pointing downwards. Idea: Like runway lights?*/}
        <ArrowDownwardTwoTone />
      </Button>
    </div>
  );
};
