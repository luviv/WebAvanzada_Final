import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages/index";
import Shop from "./pages/shop";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
