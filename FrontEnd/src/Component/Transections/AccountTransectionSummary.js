import React, { Component } from "react";

class AccountTransectionSummary extends Component {
	state = {
		transectionSummaryDates: {
			from: "2020-08-01",
			to: "2020-09-08",
		}
	};
	render() {
		return (
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
	}
}

export default AccountTransectionSummary;
