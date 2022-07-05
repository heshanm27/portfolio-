import { createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "STALKER1",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
