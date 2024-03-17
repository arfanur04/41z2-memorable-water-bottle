import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
	const [bottles, set_bottles] = useState([]);
	const [cart, set_cart] = useState([]);

	useEffect(() => {
		fetch("../../../public/bottle.json")
			.then((res) => res.json())
			.then((data) => set_bottles(data))
			.catch((err) => console.error("err", err));
	}, []);

	const handleAddToCart = (bottle) => {
		const newCart = [...cart, bottle];
		set_cart(newCart);
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
