import styles from "./Item.module.css";

const item = (props) => {
	console.log(styles);
	return (
		<li className={`${styles["customList"]} list-group-item`}>
			<span className={styles["customList"]}>{props.foodItems}</span>
		</li>

		// <li className={`${styles.customList} list-group-item`}>
		// 	{props.foodItems}
		// </li>
	);
};

export default item;

// destructuring-------------------

// const item = (props) => {
// let {foodItem} = props;
// return <li className="list-group-item">{foodItems}</li>;
// };

// destructuring-------------------

// const item = ({foodItems}) => {
// return <li className="list-group-item">{foodItems}
// </li>;
// };
