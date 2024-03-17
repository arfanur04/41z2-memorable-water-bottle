import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../Utilities/LocalStorage";

const Bottles = () => {
	const [bottles, set_bottles] = useState([]);
	const [cart, set_cart] = useState([]);

	useEffect(() => {
		fetch("../../../public/bottle.json")
			.then((res) => res.json())
			.then((data) => set_bottles(data))
			.catch((err) => console.error("err", err));
	}, []);

	// load cart from local storage
	useEffect(() => {
		console.log("called the useEffect", bottles.length);
		if (bottles.length > 0) {
			const storedCart = getStoredCart();
			console.log(`storedCart:`, storedCart);
		}
	}, [bottles]);

	const handleAddToCart = (bottle) => {
		const newCart = [...cart, bottle];
		set_cart(newCart);
		addToLS(bottle.id);
	};

	return (
		<div>
			<h2>Bottles Available: {bottles.length}</h2>
			<h4>Cart: {cart.length}</h4>
			<div className="bottle-container">
				{bottles?.map((bottle) => (
					<Bottle
						key={bottle.id}
						bottle={bottle}
						handleAddToCart={handleAddToCart}
					></Bottle>
				))}
			</div>
		</div>
	);
};

export default Bottles;
