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
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import { useEffect, useState } from "react";
function App() {
  const { ref, inView: View } = useInView();
  const [value, setValue] = useState(false);
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

  const handleOnClick = (val: boolean) => {
    if (!val) {
      window.scrollTo(0, document.body.scrollHeight);
    } else if (val) {
      const violation = document.getElementById("home");
      window.scrollTo({
        top: violation!.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {});
  theme = responsiveFontSizes(theme);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <Home />
        </div>
        <About />
        <Journy />
        <Experience />
        <Protfolio />
        <Contact />

        <InView as="div" onChange={(inView, entry) => setValue(inView)}>
          <Footer />
        </InView>
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
            display: View ? "none" : "block",
            opacity: !View ? 1 : 0,
          }}
        >
          <Fab
            sx={fabStyle}
            color="primary"
            aria-label="add"
            onClick={() => handleOnClick(value)}
            size="small"
          >
            {value ? <HomeIcon /> : <ArrowDownwardIcon />}
          </Fab>
        </motion.div>
      </ThemeProvider>
    </div>
  );
}

export default App;
