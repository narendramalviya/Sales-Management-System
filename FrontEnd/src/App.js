import React from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import { Route, Switch } from "react-router-dom";
import Transections from "./Component/Transections/Transections";
import Accounts from "./Component/Accounts/Accounts";
import Header from "./Component/Header/Header";
import Users from "./Component/Users/Users";
import Stock from './Component/Stock/Stock';
import Sales from './Component/Sales/Sales';

function App() {

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/transection" component={Transections} />
				<Route path="/accounts" component={Accounts} />
				<Route path="/users" component={Users} />
				<Route path="/sales" component={Sales} />
				<Route path="/stock" component={Stock} />
			</Switch>
		</div>
	);
}

export default App;
