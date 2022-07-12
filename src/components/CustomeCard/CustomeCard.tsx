import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

type cardprop = {
  url: string;
  title: string;
  img: string;
  chips: Array<string>;
};
const handleLink = (url: string) => {
  window.open(url);
};
export default function CustomeCard(props: cardprop) {
  return (
    <>
      <Card
        sx={{ maxWidth: 345, backgroundColor: "rgba(85, 76, 164, .2)" }}
        raised
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            {props.chips.map((chips, index) => {
              return (
                <Chip
                  color="secondary"
                  label={chips}
                  key={index}
                  sx={{ margin: "5px" }}
                />
              );
            })}
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => handleLink(props.url)}
            variant="contained"
            size="small"
            color="primary"
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
