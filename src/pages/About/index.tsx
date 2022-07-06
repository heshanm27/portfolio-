import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export default function About() {
  const theme = useTheme();
  const logo = require("../../assets/img/about.png");

  return (
    <div id="about" style={{ backgroundColor: "#070B2E", height: "100vh" }}>
      <Container>
        <Stack
          direction="row"
          sx={{ paddingTop: "40px" }}
          justifyContent="center"
        >
          <Typography variant="h5" alignItems="center" color="white">
            Get to know
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography
            variant="h2"
            alignItems="center"
            color={theme.palette.primary.main}
          >
            About Me
          </Typography>
        </Stack>

        <Grid
          container
          direction="row"
          width="100%"
          spacing={5}
          sx={{ marginTop: "40px" }}
        >
          <Grid item xs={6}>
            <img
              src={logo}
              width="100%"
              alt="cover imge"
              style={{ transform: "scale(1.5)" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              textAlign={"justify"}
              alignItems="center"
              color="white"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>

            <Button variant="contained" sx={{ marginTop: "40px" }}>
              Let's talk
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
