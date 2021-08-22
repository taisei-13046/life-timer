import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MainPage } from "../components/pages/MainPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
		  <Route exact path="/" >
			<MainPage />
		  </Route>
		  <Route exact path="/result">

		  </Route>
	  </Switch>
    </BrowserRouter>
  );
};
