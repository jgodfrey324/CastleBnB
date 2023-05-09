import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import { restoreUser } from "./store/session";
import SpotsLanding from './components/SpotsLandingPage';
import SpotDetails from './components/SpotDetails';
import SpotForm from "./components/SpotForm";

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
        <Switch>
          <Route path='/spots/new'>
            <SpotForm />
          </Route>
          <Route exact path='/'>
            <SpotsLanding />
          </Route>
          <Route exact path='/spots/:spotId'>
            <SpotDetails />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
