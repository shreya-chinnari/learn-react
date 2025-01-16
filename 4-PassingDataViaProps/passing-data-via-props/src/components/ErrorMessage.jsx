const ErrorMessage = ({ items }) => {
	// let foodItems = ["Dal", "Roti", "Rice", "Sabzi", "Fruits"];
	return items.length === 0 && <h3>I am still hungrryyy</h3>;
};

export default ErrorMessage;
