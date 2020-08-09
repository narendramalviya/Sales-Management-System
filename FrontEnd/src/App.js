import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import {  Route, Switch } from "react-router-dom";
import Transection from "./Component/Transection/Transection";
import Accounts from "./Component/Accounts/Accounts";
import Header from "./Component/Header/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route  path="/transection" component={Transection} />
				<Route  path="/accounts" component={Accounts} />
			</Switch>
		</div>
	);
}

export default App;
