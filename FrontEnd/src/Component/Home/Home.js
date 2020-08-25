import React, { Component } from "react";
import './Home.css'
class Home extends Component {
	render() {
		return (
			<div className="">
				<div className=" login form-signin mx-auto mt-5 w-25 border border-success rounded p-3">

					<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
					<label htmlFor="inputEmail" className="sr-only">
						Email address
					</label>
					<input
						type="email"
						id="inputEmail"
						className="form-control"
						placeholder="Email address"
						required
						autofocus
					/>
					<label htmlFor="inputPassword" className="sr-only">
						Password
					</label>
					<input
						type="password"
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
					/>
					<div className="checkbox mb-3">
						<label>
							<input type="checkbox" value="remember-me" />
							Remember me{" "}
						</label>
					</div>
					<button
						className="btn btn-lg btn-primary btn-block"
					
					>
						Sign in
					</button>
					<p className="mt-5 mb-3 text-muted">&copy;2020-21</p>
				</div>
			</div>
		);
	}
}
export default Home;
