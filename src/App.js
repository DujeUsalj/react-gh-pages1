import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageHistory from "./pages/history/history";
import Groups from "./pages/groups/Groups";
import Stats from "./pages/stats/stats";
import Clubs from "./pages/clubs/clubs";
import Home from "./pages/home/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/react-gh-pages1" element={<PageHistory />} />
        <Route exact path="/react-gh-pages1/Groups" element={<Groups />} />
        <Route exact path="/react-gh-pages1/Stats" element={<Stats />} />
        <Route exact path="/react-gh-pages1/Clubs" element={<Clubs />} />
        <Route exact path="/react-gh-pages1/History" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
