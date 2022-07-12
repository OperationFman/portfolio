import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";

type JumpToCardProps = {
  image?: string;
  text: string;
};

export const JumpToCard = (props: JumpToCardProps) => {
  const { text } = props;

  return (
    <Grid item sx={{ margin: "0px 50px" }}>
      <Tooltip title="Jump To..." followCursor enterDelay={200}>
        <Card
          sx={{
            maxWidth: 200,
            boxShadow: 0,
          }}
        >
          <CardActionArea>
            {/* TODO: Swap with better images and do an animation when hovered on */}
            <CardMedia
              component="img"
              height="100"
              alt="Test"
              image="vercel.svg"
            />
            <Typography variant="body2" color="text.secondary" align="center">
              {text}
            </Typography>
          </CardActionArea>
        </Card>
      </Tooltip>
    </Grid>
  );
};
