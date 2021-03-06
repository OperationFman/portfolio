import { Typography } from "@mui/material";
import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
// @ts-ignore
import ReactTypingEffect from "react-typing-effect";
import { TitleSectionStyles } from "./TitleSectionStyles";

export const TitleSection = () => {
  const timeWorked = () => {
    return intervalToDuration({
      start: new Date("August 2, 2021 09:00:00"),
      end: new Date(),
    });
  };

  const [periodWorked, setPeriodWorked] = useState<Duration>(timeWorked());

  useEffect(() => {
    const thirtySecondInterval = setInterval(() => {
      setPeriodWorked(timeWorked());
    }, 30 * 1000);
    return () => clearInterval(thirtySecondInterval);
  });

  const pluralTime = (timeUnit: string, value: number | undefined) => {
    if (value === undefined) {
      return `0 ${timeUnit}s`;
    }
    return value === 1 ? `${value} ${timeUnit}` : `${value} ${timeUnit}s`;
  };

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
          <span style={{ color: "#1565C0", ...TitleSectionStyles.autoType }}>
            {cursor}
          </span>
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
        Practicing professional for {pluralTime(
          "year",
          periodWorked?.years
        )}{" "}
        {pluralTime("month", periodWorked?.months)}{" "}
        {pluralTime("day", periodWorked?.days)}{" "}
        {pluralTime("hour", periodWorked?.hours)}{" "}
        {pluralTime("minute", periodWorked?.minutes)}{" "}
      </Typography>
    </div>
  );
};
