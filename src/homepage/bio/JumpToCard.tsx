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
    <Grid item>
      <Tooltip title="Jump To..." followCursor enterDelay={200}>
        <Card
          sx={{
            maxWidth: 345,
            boxShadow: 0,
          }}
        >
          <CardActionArea>
            {/* Do an animation when hovered on */}
            <CardMedia
              component="img"
              height="180"
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
