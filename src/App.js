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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
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
