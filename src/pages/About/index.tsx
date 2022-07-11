import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Titles from "../../components/Titles/Titles";

export default function About() {
  const theme = useTheme();
  const logo = require("../../assets/img/about.png");
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="about" style={{ backgroundColor: "#070B2E" }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          sx={{ paddingTop: matches === true ? "10px" : "90px" }}
          justifyContent="center"
        >
          <Titles mainTitle="About Me" subTitle="   Get to know" />
        </Stack>

        <Grid
          container
          direction={matches === true ? "column" : "row"}
          width="100%"
          spacing={matches === true ? 1 : 5}
          sx={{ marginTop: matches === true ? "0px" : "40px" }}
        >
          <Grid item xs={6}>
            <img
              src={logo}
              width="100%"
              alt="cover imge"
              style={{
                transform: matches === true ? "scale(1)" : "scale(1.2)",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex" }}>
              <Typography
                variant={matches === true ? "caption" : "body1"}
                textAlign={"left"}
                alignItems="center"
                color="white"
                sx={{ marginTop: "10%" }}
              >
                Hello! I'm Heshan Madhuranga , currently, I'm an undergraduate
                student at the Sri Lanka Institute of Information Technology in
                the Faculty of Computing. I'm currently working on my academic
                work , side projects and also looking for an internship to build
                up my skills and choose my career path.
              </Typography>
            </Box>
            <Stack direction="row" justifyContent="center">
              <Button variant="contained" sx={{ marginTop: "40px" }}>
                Let's talk
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
