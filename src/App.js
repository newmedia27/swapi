import React from 'react'
import "./App.css";
import Swapi from "./components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListItem from "./pages/listItem";
import Item from "./pages/item";
import Home from "./pages/home";

function App() {
 const [auth, setAuth] = React.useState(false)
  return (
    <div className="App">
      {/* <Swapi/> */}
      <Router>
        <Switch>
          <Route path="/list/:entity" render={(props)=><ListItem auth={auth}{...props}/>} />
          <Route path="/item/:entity/:id">
            <Item />
          </Route>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
