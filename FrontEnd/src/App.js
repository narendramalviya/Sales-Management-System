import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import { Route, Switch } from "react-router-dom";
import Transections from "./Component/Transections/Transections";
import Accounts from "./Component/Accounts/Accounts";
import Header from "./Component/Header/Header";
import Users from "./Component/Users/Users";

function App() {

	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/transection" component={Transections} />
				<Route path="/accounts" component={Accounts} />
				<Route path="/users" component={Users} />
			</Switch>
		</div>
	);
}

export default App;
