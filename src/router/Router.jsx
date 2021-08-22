import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MainPage } from "../components/pages/MainPage";
import { ResultPage } from "../components/pages/ResultPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
		  <Route exact path="/" >
			<MainPage />
		  </Route>
		  <Route path="/result">
			<ResultPage />
		  </Route>
	  </Switch>
    </BrowserRouter>
  );
};
