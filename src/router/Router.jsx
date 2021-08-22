import React, {useState} from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MainPage } from "../components/pages/MainPage";
import { ResultPage } from "../components/pages/ResultPage";

export const Router = () => {
	const [age, setAge] = useState('');
	const [endAge, setEndAge] = useState('');
  return (
    <BrowserRouter>
      <Switch>
		  <Route exact path="/" >
			<MainPage age={age} setAge={setAge} endAge={endAge} setEndAge={setEndAge} />
		  </Route>
		  <Route path="/result">
			<ResultPage age={age} endAge={endAge} />
		  </Route>
	  </Switch>
    </BrowserRouter>
  );
};
