import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import Navigation from './components/Navigation';
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
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch></Switch>
      )}
    </>
  );
}

export default App;
