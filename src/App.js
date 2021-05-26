import React, { Suspense, lazy } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import ListItem from "./pages/listItem";
import Item from "./pages/item";
import Home from "./pages/home";
import Header from "./components/header";

const ListItem = lazy(() => import("./pages/listItem"));

function App() {
  const [auth, setAuth] = React.useState(false);
  return (
    <div className="App">
      {/* <Swapi/> */}{" "}
      <Suspense fallback={<Loader />}>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/list/:entity"
              render={(props) => <ListItem auth={auth} {...props} />}
            />
            <Route path="/item/:entity/:id">
              <Item />
            </Route>
            <Route exact path="/" component={Home} />
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

function Loader() {
  return <div>LOAD....</div>;
}
