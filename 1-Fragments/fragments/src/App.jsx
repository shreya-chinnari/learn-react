//added for using <React.Fragment/>
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<h1>Healthy Food</h1>
			<ul class="list-group">
				<li class="list-group-item">Rice</li>
				<li class="list-group-item">Dal</li>
				<li class="list-group-item">Sabzi</li>
			</ul>
		</React.Fragment>

		/*  USING  <div></div>

    <div>
			<h1>Healthy Food</h1>
			<ul class="list-group">
				<li class="list-group-item">Rice</li>
				<li class="list-group-item">Dal</li>
				<li class="list-group-item">Sabzi</li>
			</ul>
		</div> 

    */

		/*  USING <></>

    <>
			<h1>Healthy Food</h1>
			<ul class="list-group">
				<li class="list-group-item">Rice</li>
				<li class="list-group-item">Dal</li>
				<li class="list-group-item">Sabzi</li>
			</ul>
		</>

    */
	);
}

export default App;
