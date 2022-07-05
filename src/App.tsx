import { Box, createTheme, ThemeProvider } from "@mui/material";

import Home from "./pages/Home/Home";
import About from "./pages/About/index";
import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "STALKER1",
    },
    palette: {
      primary: {
        main: "#40C4FF",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
        <About />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            zIndex: 2,
            justifyContent: "center",
          }}
        >
          <BottomNavBar />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
