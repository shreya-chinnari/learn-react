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
		</React.Fragment>
	);
}

export default App;
