import Item from "./Item";

const FoodItems = ({ items }) => {
	// let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];

	return (
		<ul className="list-group custom-list-group">
			{items.map((item) => (
				<Item
					key={item}
					foodItems={item}
				></Item>
				// foodItems - passed as a  argument,
			))}
		</ul>
	);
};

export default FoodItems;
