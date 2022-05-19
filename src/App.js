import classes from "./App.module.css";
import * as ROUTES from "./routes/routes";
import { Route, BrowserRouter as Router } from "react-router-dom ";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HISTORY} />
    </Router>
  );
}

export default App;
