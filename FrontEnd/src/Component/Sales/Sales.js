import React, { Component } from "react";

class Sales extends Component {
	state = {
		// fill stock when component did mount
		stockItems: [
			{ category: "item1", quantity: 50, rate: 120 },
			{ category: "item2", quantity: 40, rate: 100 },
			{ category: "item3", quantity: 30, rate: 110 },
		],
		purchasedItemes: [
			{ category: "item1", quantity: 12, rate: 120, amount: 1440 },
			{ category: "item2", quantity: 10, rate: 100, amount: 1000 },
			{ category: "item3", quantity: 10, rate: 110, amount: 1100 },
		],
		selectItem: {
			quantity: 0,
			category: "item1",
		},
		totalAmount: 3540,
	};

	// on change handler for select item and quantity
	onChangeHandler = (event) => {
		this.setState({
			selectItem: {
				...this.state.selectItem,
				[event.target.name]: event.target.value,
			},
		});
	};
	// add button handler to adding selected item to list
	addButtonHandler = () => {
		
		if (this.state.stockItems !== null) {
			const selectedItemQuantity = this.state.selectItem.quantity;
			// get stock itmes
			const stockItems = [...this.state.stockItems];
			//get the category of stock and check the rate of items and is available in stock then add in selected item list
			const stockItem = stockItems.find(
				(item) => item.category === this.state.selectItem.category
			);
			if (selectedItemQuantity <= stockItem.quantity) {
				let item = {
					category: stockItem.category,
					quantity: selectedItemQuantity,
					rate: stockItem.rate,
					amount: stockItem.rate * selectedItemQuantity,
				};
               
				// update purchased item state 
				// get old state
				// push selected item object, based on category
				// update state
				const purchasedItemArr = [...this.state.purchasedItemes];
				purchasedItemArr.push(item)
				this.setState({ purchasedItemes: purchasedItemArr });
			} else {
				alert("please check stock??");
			}
		}
	};
	render() {
		console.log(this.state.purchasedItemes);
		// item dropdown
		let stockItems = "";
		if (this.state.stockItems !== null) {
			const stockItemState = [...this.state.stockItems];
			stockItems = stockItemState.map((item, index) => (
				<option key={index} value={item.category}>
					{item.category}
				</option>
			));
		}

		// selected items list
		let purchasedItems = "";
		if (this.state.purchasedItemes !== null) {
			let purchasedItemState = [...this.state.purchasedItemes];
			purchasedItems = purchasedItemState.map((item, index) => {
				return (
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{item.category}</td>
						<td>{item.rate}</td>
						<td>{item.quantity}</td>
							<th>{item.amount}</th>
					</tr>
				);
			});
		} else
			purchasedItems = (
				<tr>
					<h3>Loading ...</h3>
				</tr>
			);
	//   TODO: pending work
	// 
		return (
			<div className="container border border-success rounded">
				<h3> Sales </h3>
				<div className="jumbotron row border border-success rounded">
					<div className="col-3 border border-success rounded">
						<h1>Sales Entry</h1>
					</div>
					<div className="col-9 border border-success rounded">
						<div className="">
							<label htmlFor="items"> Select Item</label>
							<select
								className=""
								id="items"
								name="category"
								onChange={this.onChangeHandler}
							>
								{stockItems}
							</select>

							<label htmlFor="quantity"> Quantity</label>
							<input
								type="number"
								id="quantity"
								className=""
								name="quantity"
								value={this.state.selectItem.quantity}
								onChange={this.onChangeHandler}
							/>
							<button
								className="btn btn-success m-2"
								onClick={this.addButtonHandler}
							>
								add
							</button>
						</div>

						<div className="border border-success rounded">
							<h3>Purchased List</h3>
							<table className="table table-hover">
								<thead>
									<tr>
										<th>SR.</th>
										<th>Item Name</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Amount</th>
									</tr>
								</thead>
								<tbody>
									{purchasedItems}
									<tr>
										<td colSpan="4">Total</td>
										<td>
											{this.state.totalAmount ? (
												this.state.totalAmount
											) : (
												<p>00.00</p>
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Sales;
