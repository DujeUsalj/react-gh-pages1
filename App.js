import classes from "./App.module.css";
import React from "react";
import Landingpage from "./pages/landingpage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import Analiza from "./pages/analiza";
import Cjepiva from "./pages/cjepiva";
import Anketa from "./pages/anketa";
function App() {
  return (
    <Router>
      <Route exact path={ROUTES.LANDING}>
        <Landingpage />
      </Route>
      <Route exact path={ROUTES.ANALIZA}>
        <Analiza />
      </Route>
      <Route exact path={ROUTES.CJEPIVA}>
        <Cjepiva />
      </Route>
      <Route exact path={ROUTES.ANKETA}>
        <Anketa />
      </Route>
    </Router>
  );
}

export default App;
