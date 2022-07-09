import { Typography } from "@mui/material";
// @ts-ignore
import ReactTypingEffect from "react-typing-effect";
import { TitleSectionStyles } from "./TitleSectionStyles";

export const TitleSection = () => {
  return (
    <div style={TitleSectionStyles.container}>
      <span style={TitleSectionStyles.titleFont}>Franklin</span>
      <span style={TitleSectionStyles.titleFont}>{` V `}</span>
      <span
        style={{
          color: "#1565C0",
          ...TitleSectionStyles.titleFont,
        }}
      >
        Moon
      </span>

      <br />
      <ReactTypingEffect
        text={["Developer", "Volunteer", "Designer"]}
        cursorRenderer={(cursor: string) => (
          <span style={TitleSectionStyles.autoTypeCursor}>{cursor}</span>
        )}
        displayTextRenderer={(text: string) => {
          return <span style={TitleSectionStyles.autoType}>{text}</span>;
        }}
        typingDelay="1500ms"
      />

      <Typography
        variant="subtitle1"
        align="left"
        color="baseGrey"
        sx={TitleSectionStyles.blurb}
      >
        Full-stack software developer with a passion for user centric design,
        volunteering globally and advocating for social change
        <br />
        <br />
        Practicing professional for x years x months x days x hours x minutes
      </Typography>
    </div>
  );
};
