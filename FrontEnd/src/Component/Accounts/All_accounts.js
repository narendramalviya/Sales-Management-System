import React, { Component } from "react";

class All_accounts extends Component {
	state = {
		allAccounts: null,
	};
	// componentDidMount() {
	// 	// TODO: get Request for all accounts

	// 	fetch(
	// 		"https://inventory-management-9f8d7.firebaseio.com/accounts.json",
	// 		{
	// 			method: "get",
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			this.setState({ allAccounts: result });
	// 		});
	// }
	render() {
		
		return <div className="jumbotron">{"here all accounts"}</div>;
	}
}

export default All_accounts;
