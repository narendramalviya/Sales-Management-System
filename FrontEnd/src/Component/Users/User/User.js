import React, { Component } from "react";

class User extends Component {
	state = {
		user: {
			userId: "10",
			name: "nk",
			lastName: "malviya",
			phone: "7742401557",
			address: "pali rajasthan",
		},
	};
	render() {
		return (
			<div>
				<h1 className="">User Details</h1>
			</div>
		);
	}
}

export default User;
