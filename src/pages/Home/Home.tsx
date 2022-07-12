import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CustomeIconButton from "../../components/IconButton/CustomeIconButton";
import { useInView } from "react-intersection-observer";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { motion } from "framer-motion";
export default function Home() {
  const { ref } = useInView();
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

  const handleDownlaod = () => {
    window.open(
      "https://drive.google.com/file/d/1cn1tlPdY4jLnJqQfcqcaNXH3zlI_IFng/view?usp=sharing",
      "_blank"
    );
  };

  const handleOnClick = () => {
    const violation = document.getElementById("contact");
    window.scrollTo({
      top: violation!.offsetTop,
      behavior: "smooth",
    });
  };
  const handleInit = async (main: Engine): Promise<void> => {
    await loadFull(main);
  };

  return (
    <div id="home" ref={ref} style={{ height: "100vh" }}>
      <Container maxWidth="xl" sx={ContainerStyle}>
        <Box sx={{ p: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Stack direction="column" alignItems="center">
              <Typography variant="h5" alignItems="center" color="white">
                Hello I'm
              </Typography>
              <Typography variant="h4" alignItems="center" color="white">
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
            <Button variant="outlined" color="primary" onClick={handleDownlaod}>
              Download CV
            </Button>
            <Button variant="contained" color="primary" onClick={handleOnClick}>
              Let's Talk
            </Button>
          </Stack>

          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 3, times: [0, 0.2, 1] }}
            style={{ opacity: "0" }}
          >
            <Stack
              direction={matches === true ? "row" : "column"}
              sx={[
                {
                  position: "absolute",
                  bottom: "0",
                  opacity: "1",
                  justifyContent: "center",
                  marginBottom: "100px",
                  marginLeft: "100px",
                },
                matches && {
                  position: "static",
                  marginLeft: "0",

                  marginBottom: "10px",
                  marginTop: "30px",
                },
              ]}
            >
              {SocialMedia &&
                SocialMedia.map((value, index) => {
                  return (
                    <CustomeIconButton
                      key={index}
                      Icon={value.icon}
                      url={value.url}
                      label={value.label}
                      isScoial={false}
                    />
                  );
                })}
            </Stack>
          </motion.div>
          <Stack direction="row" justifyContent="center">
            <img
              src={logo}
              alt="mainlogo"
              width={matches === true ? "60%" : "24%"}
              style={{ position: "absolute", bottom: "0" }}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            position: "fixed",
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        >
          <Particles
            id="headerParticles"
            init={handleInit}
            style={{ zIndex: "-99" }}
            options={{
              background: {
                color: {
                  value: "#070B2E",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.8,
                  },
                },
              },
              particles: {
                color: {
                  value: "#40C4FF",
                },
                links: {
                  color: "#40C4FF",
                  distance: 150,
                  enable: true,
                  opacity: 1,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </Box>
      </Container>
    </div>
  );
}
