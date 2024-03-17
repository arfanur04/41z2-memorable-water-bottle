import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
	const [bottles, set_bottles] = useState([]);

	useEffect(() => {
		fetch("../../../public/bottle.json")
			.then((res) => res.json())
			.then((data) => set_bottles(data))
			.catch((err) => console.error("err", err));
	}, []);

	return (
		<div>
			<h2>Bottles Here: {bottles.length}</h2>
			<div className="bottle-container">
				{bottles?.map((bottle) => (
					<Bottle
						key={bottle.id}
						bottle={bottle}
					></Bottle>
				))}
			</div>
		</div>
	);
};

export default Bottles;
