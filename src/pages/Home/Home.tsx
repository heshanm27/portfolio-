import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CustomeIconButton from "../../components/IconButton/CustomeIconButton";
export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const logo = require("../../assets/img/frontImage.png");

  const ContainerStyle = [
    {
      paddingTop: "20px",
    },
    matches && {
      paddingTop: "10px",
    },
  ];

  const SocialMedia = [
    {
      icon: <LinkedInIcon />,
      url: "http://www.linkedin.com",
      label: "LinkedIn",
    },
    { icon: <GitHubIcon />, url: "http://www.linkedin.com", label: "GitHub" },
    {
      icon: <PinterestIcon />,
      url: "http://www.linkedin.com",
      label: "Pinterest",
    },
  ];
  var arr = [2, 5, 6, 3, 8, 9];
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
            sx={{
              position: "absolute",
              bottom: "0",
              marginBottom: "100px",
              marginLeft: "100px",
            }}
          >
            {SocialMedia &&
              SocialMedia.map((value, index) => {
                return (
                  <CustomeIconButton
                    Icon={value.icon}
                    url={value.url}
                    label={value.label}
                  />
                );
              })}

            <Divider orientation="vertical" flexItem />
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ marginTop: "0px" }}
          >
            <img
              src={logo}
              alt="mainlogo"
              width={matches === true ? "100%" : "25%"}
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
