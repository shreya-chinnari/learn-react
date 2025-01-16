import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];
	return (
		<React.Fragment>
			<h1>List of Healthy food items using array,list</h1>

			<ul className="list-group">
				{foodItems.map((item) => (
					<li
						key={item}
						className="list-group-item"
					>
						{item}
					</li>
				))}

				{/* changes to:
        
<li className="list-group-item">Dal</li>
<li className="list-group-item">Roti</li>
<li className="list-group-item">Rice</li> 

        */}
			</ul>
		</React.Fragment>
	);
}

export default App;
