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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const logo = require("../../assets/img/frontImage.png");

  const ContainerStyle = [
    {
      paddingTop: "20px",
    },
    matches && {
      paddingTop: "10px",
    },
  ];
  return (
    <div id="home" style={{ backgroundColor: "#070B2E", height: "100vh" }}>
      <Container maxWidth="xl" sx={ContainerStyle}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Stack direction="column" alignItems="center">
              <Typography variant="h5" alignItems="center" color="white">
                Hello I'm
              </Typography>
              <Typography variant="h2" alignItems="center" color="white">
                Heshan Madhuranga
              </Typography>
              <Typography variant="h5" alignItems="center" color="white">
                Fullstack Developer
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            spacing={5}
            sx={{ marginTop: "40px" }}
          >
            <Button variant="outlined" color="primary">
              Download CV
            </Button>
            <Button variant="contained" color="primary">
              Let's Talk
            </Button>
          </Stack>
          <Stack
            direction="column"
            spacing={5}
            sx={{ position: "absolute", bottom: "0", marginBottom: "100px" }}
          >
            <LinkedInIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ marginTop: "0px" }}
          >
            <img
              src={logo}
              width={matches == true ? "100%" : "25%"}
              style={{ position: "absolute", bottom: "0" }}
            />
          </Stack>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={"center"}
        ></Stack>
      </Container>
    </div>
  );
}
