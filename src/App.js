import * as ROUTES from "./routes/routes";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PageHistory from "./pages/history/history";
function App() {
  return (
    <Router>
      <PageHistory />
    </Router>
  );
}

export default App;
