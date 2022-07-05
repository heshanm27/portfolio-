import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
function App() {
  return (
    <Routes>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  );
}

export default App;
