import {
  Card,
  CardMedia,
  Box,
  CardActionArea,
  CardContent,
  Tooltip,
  Typography,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { TutorialMetaData } from "../../types";
import { subTitleShortener, titleShortener } from "./textFormatter";

type TutorialCardProps = {
  cardData: TutorialMetaData;
  accentColor: string;
};

export const TutorialCard = (props: TutorialCardProps): JSX.Element => {
  const { cardData, accentColor } = props;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  return (
    <IconButton
      onClick={() => {
        setLoading(true);
        router.push(`tutorials/${cardData.link}`);
      }}
      disableRipple
      disableFocusRipple
    >
      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            alt={cardData.title}
            image={cardData.thumbnail}
          />
          <CardContent>
            <Box
              sx={{
                height: "25px",
                margin: "-35px 0px 0px 0px",
                padding: "0px 15px",
                border: `2px solid ${accentColor}`,
                borderRadius: 6,
                position: "absolute",
                backgroundColor: "background.paper",
                boxShadow: 2,
              }}
            >
              <Typography
                variant="body2"
                align="right"
                sx={{ fontWeight: 200 }}
              >
                {cardData.topic}
              </Typography>
            </Box>
            <Typography
              gutterBottom
              variant="h5"
              sx={{ marginBottom: loading ? "0px" : "5px" }}
            >
              {titleShortener(cardData.title)}
            </Typography>
            <Tooltip title={cardData.subTitle} followCursor enterDelay={200}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  paddingLeft: "5px",
                  fontWeight: 200,
                }}
              >
                {subTitleShortener(cardData.subTitle)}
              </Typography>
            </Tooltip>
          </CardContent>
          {loading && <LinearProgress color="secondary" />}
        </CardActionArea>
      </Card>
    </IconButton>
  );
};
