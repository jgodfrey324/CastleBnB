import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from './components/SignupFormPage';
import { restoreUser } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  //resetting a session user (or null) after every rerender
  //after every hot reload-> should see setUser action being dispatched
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  //if isLoaded if ever false, useEffect hasn't ran and
  //proper session data hasn't been loaded
  return (
    isLoaded && (
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    )
  );
}

export default App;
