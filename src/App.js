import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebaseClient } from "./firebase/firebase-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import UserContext from "./context/UserContext";
import Initial from "./components/Initial";

function App() {
  const [user, setUser] = useState(null);
  const [initial, setInitial] = useState(false);

  useEffect(()=>{
    firebaseClient.auth().onAuthStateChanged((user)=>{
      if(user !== null) {
        setUser(user);
      }
      setInitial(true)
    })
  }, []);

  if(initial === false) {
    return (
      <Initial/>
    )
  }

  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">React Firebase Auth</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link className="nav-item nav-link" to="/login">Login</Link>
    <Link className="nav-item nav-link" to="/signup">Signup</Link>
    </div>
  </div>
</nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <UserContext.Provider value={user}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
