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
import { motion } from "framer-motion";
import {
  container,
  itemLogo,
  item,
} from "../../components/Animations/Animations";

export default function About() {
  const theme = useTheme();
  const logo = require("../../assets/img/about.png");
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="about" style={{ backgroundColor: "#070B2E" }}>
      <Container maxWidth="xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.5 }}
          exit="exit"
        >
          <motion.div variants={itemLogo}>
            <Stack
              direction="row"
              sx={{ paddingTop: matches === true ? "10px" : "90px" }}
              justifyContent="center"
            >
              <Titles mainTitle="About Me" subTitle="   Get to know" />
            </Stack>
          </motion.div>
          <Grid
            container
            direction={matches === true ? "column" : "row"}
            width="100%"
            spacing={matches === true ? 1 : 5}
            sx={{ marginTop: matches === true ? "0px" : "40px" }}
          >
            <Grid item xs={6}>
              <motion.div variants={item}>
                <img
                  src={logo}
                  width="100%"
                  alt="cover imge"
                  style={{
                    transform: matches === true ? "scale(1)" : "scale(1.2)",
                  }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex" }}>
                <motion.div variants={item}>
                  <Typography
                    variant={matches === true ? "caption" : "subtitle1"}
                    textAlign={"left"}
                    alignItems="center"
                    color="white"
                    sx={{ marginTop: "10%" }}
                  >
                    Hello! I'm Heshan Madhuranga , currently, I'm an
                    undergraduate student at the Sri Lanka Institute of
                    Information Technology in the Faculty of Computing. I'm
                    currently working on my academic work , side projects and
                    also looking for an internship to build up my skills and
                    choose my career path.
                    <Typography
                      variant={matches === true ? "caption" : "subtitle1"}
                      textAlign={"left"}
                      alignItems="center"
                      color="white"
                      sx={{ marginTop: "1%" }}
                    >
                      I'm familiar with various programming languages like Java,
                      C, C++, Python, ReactJs, JavaScript, TypeScript, Flutter,
                      HTML, CSS, and Tailwind, and I'm experienced in version
                      control and team collaboration with git.
                    </Typography>
                  </Typography>
                </motion.div>
              </Box>
              <motion.div variants={item}>
                <Stack direction="row" justifyContent="center">
                  <Button variant="contained" sx={{ marginTop: "40px" }}>
                    Let's talk
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
}
