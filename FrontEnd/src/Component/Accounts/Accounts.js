import React, { Component } from "react";
import { NavLink, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Create_account from "./Create_account";
import All_accounts from "./All_accounts";

class Accounts extends Component {
	render() {
		// console.log(this.props);
		return (
			<div className="container">
				<section className="jumbotron ">
					<div className="">
						<NavLink
							className="btn btn-success m-2"
							to={`${this.props.match.path}/create-account`}
						>
							Create New Account
						</NavLink>

						<NavLink
							className="btn btn-success m-2"
							to={`${this.props.match.path}/all-accounts`}
						>
							All Accounts
						</NavLink>
					</div>
				</section>
				<div className="jumbotron">
					<Switch>
						<Route
							path={`${this.props.match.path}/create-account`}
							component={Create_account}
						/>
						<Route
							path={`${this.props.match.path}/all-accounts`}
							component={All_accounts}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}
export default Accounts;
