import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import css from './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import NotMatch from "./Components/NotMatch/NotMatch";
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetails/>
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
