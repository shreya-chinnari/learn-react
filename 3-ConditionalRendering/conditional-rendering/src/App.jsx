import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	// SIMPLE if-else ----------------------------------------------------------------------

	// let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];

	// if (foodItems.length === 0) {
	// 	return <h3>I am still HUNGRY.</h3>;
	// }

	// // else -
	// return (
	// 	<React.Fragment>
	// 		<h1>List of Healthy food items using array,list</h1>

	// 		<ul className="list-group">
	// 			{foodItems.map((item) => (
	// 				<li
	// 					key={item}
	// 					className="list-group-item"
	// 				>
	// 					{item}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</React.Fragment>

	//  TERNARY OPERATOR -----------------------------------------

	// let foodItems = [];
	// // let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];

	// return (
	// 	<React.Fragment>
	// 		<h1>WHEN ARRAY IS EMPTY</h1>

	// 		{foodItems.length === 0 ? <h3>I am still hungrryyy</h3> : null}

	// 		<ul className="list-group">
	// 			{foodItems.map((item) => (
	// 				<li
	// 					key={item}
	// 					className="list-group-item"
	// 				>
	// 					{item}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</React.Fragment>

	// ---------------------------------------------------------------------

	// let foodItems = [];

	// let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];

	// let emptyMessage =
	// 	foodItems.length === 0 ? <h3>I am still hungrryyy</h3> : null;

	// return (
	// 	<React.Fragment>
	// 		<h1>WHEN ARRAY IS EMPTY</h1>

	// 		{emptyMessage}

	// 		<ul className="list-group">
	// 			{foodItems.map((item) => (
	// 				<li
	// 					key={item}
	// 					className="list-group-item"
	// 				>
	// 					{item}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</React.Fragment>

	// TRUTHY FALSY VALUE , LOGICAL OPERATOR ---------------------------------------------------------------------
	let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];

	return (
		<React.Fragment>
			<h1>WHEN ARRAY IS EMPTY</h1>

			{foodItems.length === 0 && <h3>I am still hungrryyy</h3>}
			{/* if LHS is true, will implement the RHS,
      if LHS is false, will ignore RHS */}

			<ul className="list-group">
				{foodItems.map((item) => (
					<li
						key={item}
						className="list-group-item"
					>
						{item}
					</li>
				))}
			</ul>
		</React.Fragment>
	);
}

export default App;
