const item = (props) => {
	return <li className="list-group-item">{props.foodItems}</li>;
};

export default item;

// destructuring-------------------

// const item = (props) => {
// let {foodItem} = props;
// return <li className="list-group-item">{foodItems}</li>;
// };

// destructuring-------------------

// const item = ({foodItems}) => {
// return <li className="list-group-item">{foodItems}</li>;
// };
