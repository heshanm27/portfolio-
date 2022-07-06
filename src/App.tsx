import {
  Box,
  createTheme,
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
import { responsiveProperty } from "@mui/material/styles/cssUtils";
function App() {
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

  theme = responsiveFontSizes(theme);

  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
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
              width: "100%",
            },
          ]}
        >
          <BottomNavBar />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
