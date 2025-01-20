import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];

	return (
		<React.Fragment>
			<h1>WHEN ARRAY IS EMPTY</h1>
			<ErrorMessage items={foodItems}></ErrorMessage>
			<FoodItems items={foodItems}></FoodItems>

			{/* The syntax items={foodItems} is passing the foodItems array as a propERTY named items to a component.  */}
		</React.Fragment>
	);
}

export default App;


// items is the name of the prop that you're passing to the child component.
// foodItems is the variable you're passing as the value of the items prop. This variable contains an array of strings (food item names).
