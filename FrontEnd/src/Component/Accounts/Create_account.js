import React, { Component } from "react";

class Create_account extends Component {
	state = {
		accountNo: "1",
		name: "Narendra",
		lastName: "Malviya",
		phone: "7742401557",
		address: "pali rajasthan",
		balance: "0",
	};

	onChangeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	submitHandler = () => {
		console.log("clicked");
		// fetch(
		// 	"https://inventory-management-9f8d7.firebaseio.com/accounts.json",
		// 	{
		// 		method: "post",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify(this.state),
		// 	}
		// )
		// 	.then((response) => console.log(response))
		// 	.catch((err) => console.log(err));
		// .then(result=> alert(result)).catch((err)=> console.log(err));
	};
	render() {
		return (
			<div>
				<h1 className="">Create New Account</h1>
				<div className="form-group">
					<label htmlFor="accountNo">Account No.</label>
					<input
						type="number"
						className="form-control"
						id="accountNo"
						name="accountNo"
						placeholder="Enter Account No."
						onChange={this.onChangeHandler}
						value={this.state.accountNo}
					/>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter Name"
						name="name"
						onChange={this.onChangeHandler}
						value={this.state.name}
					/>
					<label htmlFor="lastname">Lastname</label>
					<input
						type="text"
						className="form-control"
						id="lastname"
						placeholder="Enter LastName"
						name="lastName"
						onChange={this.onChangeHandler}
						value={this.state.lastName}
					/>
					<label htmlFor="phone">Phone No.</label>
					<input
						type="text"
						className="form-control"
						id="phone"
						placeholder="Enter Phone No."
						name="phone"
						onChange={this.onChangeHandler}
						value={this.state.phone}
					/>
					<label htmlFor="address">Address</label>
					<textarea
						type="text"
						className="form-control"
						id="address"
						placeholder="Enter Address"
						name="address"
						value={this.state.address}
						onChange={this.onChangeHandler}
					/>
					<label htmlFor="balance">Balance</label>
					<input
						type="number"
						className="form-control"
						id="balance"
						placeholder="Enter Balance ex.- 10000"
						name="balance"
						value={this.state.balance}
						onChange={this.onChangeHandler}
					/>
				</div>

				<button
					className="btn btn-primary"
					onClick={this.submitHandler}
				>
					Submit
				</button>
			</div>
		);
	}
}

export default Create_account;
