import React, { Component } from "react";

class Transection extends Component {
	state = {
		transection: {
			accountNo: "2",
			amount: 20000,
			description: "for purchases",
			transectionType: "debit",
		},
		transectionSummaryDates: {
			from: "2020-08-01",
			to: "2020-09-08",
		},
		showCrDrForm: false,
		showSummeryForm: false,
	};
	// option button handlers
	// transection debit credit option handler
	// when click on option cedit/debit this method triggerd
	CrDrOptionButtonHandler = () => {
		this.setState({ showCrDrForm: true, showSummeryForm: false });
	};

	summaryOptionButtonHandler = () => {
		this.setState({ showCrDrForm: false, showSummeryForm: true });
	};
	//transection form submit button handler
	transectionSubmitButtonHandler = () => {
		alert("transec button clicked");
	};
	// summary form sumit button handler
	summarySubmitButtonHandler = (event) => {
		alert("summary button clicked");
	};

	// credit debit transection form state handler
	transectionOnChangeHandler = (event) => {
		this.setState({
			transection: {
				...this.state.transection,
				[event.target.name]: event.target.value,
			},
		});
	};

	// date state Handler when chage date this method triggerd
	onSummaryDateChangeHandler = (event) => {
		console.log(event.target.name, event.target.value);
	};
	render() {
		const creditDebitForm = (
			<div className="jumbotron">
				<h1>Transection</h1>
				<div className="form-group">
					<label htmlFor="accountNo">Account No.</label>
					<input
						type="number"
						className="form-control"
						id="accountNo"
						name="accountNo"
						value={this.state.transection.accountNo}
						onChange={this.transectionOnChangeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						className="form-control"
						id="amount"
						name="amount"
						value={this.state.transection.amount}
						onChange={this.transectionOnChangeHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						type="number"
						className="form-control"
						id="description"
						name="description"
						value={this.state.transection.description}
						onChange={this.transectionOnChangeHandler}
					/>
				</div>
				<div className="custom-control custom-radio custom-control-inline">
					<input
						type="radio"
						id="debit"
						className="custom-control-input"
						checked={
							this.state.transection.transectionType === "debit"
						}
						value="debit"
						name="transectionType"
						onChange={this.transectionOnChangeHandler}
					/>
					<label className="custom-control-label" htmlFor="debit">
						Debit
					</label>
				</div>
				<div className="custom-control custom-radio custom-control-inline">
					<input
						type="radio"
						id="credit"
						className="custom-control-input"
						checked={
							this.state.transection.transectionType === "credit"
						}
						value="credit"
						name="transectionType"
						onChange={this.transectionOnChangeHandler}
					/>
					<label className="custom-control-label" htmlFor="credit">
						Credit
					</label>
				</div>
				<button
					onClick={this.transectionSubmitButtonHandler}
					className="btn btn-primary"
				>
					Submit
				</button>
			</div>
		);
		const allSummary = (
			<div className="jumbotron ">
				<h3>All Transection Summary </h3>
				<label htmlFor="dateTo" className="tex m-2">
					Date From
				</label>
				<input
					className=""
					type="date"
					id="dateTo"
					value={this.state.transectionSummaryDates.from}
					name="dateTo"
					onChange={this.onSummaryDateChangeHandler}
				/>
				<label htmlFor="from" className="tex m-2">
					To
				</label>
				<input
					className=""
					type="date"
					id="from"
					value={this.state.transectionSummaryDates.to}
					name="from"
					onChange={this.onSummaryDateChangeHandler}
					/>
				<button
					onClick={this.summarySubmitButtonHandler}
					className="btn btn-success btn-sm m-2"
				>
					Submit
				</button>
			</div>
		);
		return (
			<div className="container">
				<div className="jumbotron">
					<div className="">
						<button
							onClick={this.CrDrOptionButtonHandler}
							className="btn btn-success m-2 "
						>
							Credit/Debit
						</button>
						<button
							className="btn btn-success m-2 "
						>
							Stock
						</button>
						<button
							className="btn btn-success m-2 "
						>
							Sale
						</button>
						<button
							onClick={this.summaryOptionButtonHandler}
							className="btn btn-success m-2"
						>
							All transection summary
						</button>
					</div>
					<div className="">
						{this.state.showCrDrForm ? creditDebitForm : null}
						{this.state.showSummeryForm ? allSummary : null}
					</div>
				</div>
			</div>
		);
	}
}
export default Transection;
