import {
  Box,
  createTheme,
  Fab,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

import Home from "./pages/Home/Home";
import About from "./pages/About/index";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import Journy from "./pages/Journy/Journy";
import Experience from "./pages/Experience/Experiene";
import Protfolio from "./pages/Portfolio/Protfolio";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import HomeIcon from "@mui/icons-material/Home";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function App() {
  const { ref, inView } = useInView();
  let theme = createTheme({
    typography: {
      fontFamily: "STALKER1",
    },
    palette: {
      primary: {
        main: "#40C4FF",
      },
      text: {
        primary: "#fff",
      },
    },
  });

  const fabStyle = {
    position: "fixed",
    bottom: 50,
    right: 50,
  };

  const handleOnClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div ref={ref}>
          <Home />
        </div>
        <About />
        <Journy />
        <Experience />
        <Protfolio />
        <Contact />
        <Footer />
        <Box
          sx={[
            {
              display: "flex",
              width: "100%",
              zIndex: 2,
              justifyContent: "center",
            },
            matches && {
              width: "80%",
            },
          ]}
        >
          <BottomNavBar />
        </Box>
        <motion.div
          animate={{
            display: inView ? "none" : "block",
            opacity: !inView ? 1 : 0,
          }}
        >
          <Fab
            sx={fabStyle}
            color="primary"
            aria-label="add"
            onClick={handleOnClick}
            size="small"
          >
            <ArrowUpwardIcon />
          </Fab>
        </motion.div>
      </ThemeProvider>
    </div>
  );
}

export default App;
