import {
  Card,
  CardMedia,
  Box,
  CardActionArea,
  CardContent,
  Tooltip,
  Typography,
  LinearProgress,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { TutorialMetaData } from "../../tutorials/types";
import { subTitleShortener, titleShortener } from "../../tutorials/components/cards/textFormatter";
import { FeedCardFormatting, Page } from "./types";

type FeedCardProps = {
  formatting: FeedCardFormatting;
  cardData: TutorialMetaData;
};

export const FeedCard = (props: FeedCardProps): JSX.Element => {
  const { formatting, cardData } = props;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const tutorialTopicBadge = (): JSX.Element | void => {
    if (formatting.page === Page.TutorialPage) {
      return (
        <Box
          sx={{
            height: "25px",
            margin: "-35px 0px 0px 0px",
            padding: "0px 15px",
            border: `2px solid ${formatting.accentColor}`,
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
      )
    }
  }

  return (
    <div
      onClick={() => {
        setLoading(true);
        router.push(`${formatting.page}/${cardData.link}`);
      }}
    >
      <Card sx={{ maxWidth: formatting.maxWidth, boxShadow: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={formatting.maxHeight}
            alt={cardData.title}
            image={cardData.thumbnail}
          />
          <CardContent>
            {tutorialTopicBadge()}
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
          {loading && <LinearProgress color={formatting.theme} />}
        </CardActionArea>
      </Card>
    </div>
  );
};
