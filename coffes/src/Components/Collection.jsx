import { useState } from "react";
import Coffe from "./Coffe";
import vector from "../assets/vector.svg";

const comparator = (a, b) => {
	if (a.available === b.available) return 0;
	else if (a.available) return -1;
	else 1;

	if (b.popular - a.popular !== 0) {
		return b.popular - a.popular;
	}

	if (parseFloat(b.star) - parseFloat(a.star) !== 0) {
		return parseFloat(b.star) - parseFloat(a.star);
	}

	if (a.title !== b.title) {
		return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
	}
};

const coffesList = [
	{
		title: "House Coffee",
		price: "3.50",
		star: "4.85",
		votes: "14",
		popular: true,
		available: true,
		img: "https://images.unsplash.com/photo-1622465413095-2ee67c192522?q=80&w=904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Cappuccino",
		price: "5.20",
		star: "4.7",
		votes: "65",
		popular: true,
		available: true,
		img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Coffee Latte",
		price: "4.50",
		star: "5.0",
		votes: "23",
		popular: false,
		available: true,
		img: "https://images.unsplash.com/photo-1528719001649-9f44634e34b0?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Espresso",
		price: "2.50",
		star: "4.9",
		votes: "55",
		popular: false,
		available: false,
		img: "https://images.unsplash.com/photo-1612509590595-785e974ed690?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Chocolate Coffe",
		price: "4.00",
		star: "4.65",
		votes: "122",
		popular: false,
		available: false,
		img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Valentine Special",
		price: "5.50",
		star: "0",
		votes: "0",
		popular: false,
		available: true,
		img: "https://images.unsplash.com/photo-1528697203043-733dafdaa316?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
].sort((a, b) => comparator(a, b));

const Collection = () => {
	const [filter, setFilter] = useState("all");
	let finalList =
		filter === "all" ? coffesList : coffesList.filter((a) => a.available);

	return (
		<div className="container-collection">
			<img
				src={vector}
				alt="vector"
				className="vector"
			/>
			<div className="text">
				<h1>Our Collection</h1>
				<p>
					Introducing our Coffee Collection, a selection of unique coffees from
					different roast types and origins, expertly roasted in small batches
					and shipped fresh weekly.
				</p>
			</div>

			<div className="coffes-list">
				<div className="btns">
					<div
						className={filter === "all" ? "btn selected" : "btn"}
						onClick={() => (filter !== "all" ? setFilter("all") : null)}>
						All Products
					</div>
					<div
						className={filter === "available" ? "btn selected" : "btn"}
						onClick={() =>
							filter !== "available" ? setFilter("available") : null
						}>
						Available Now
					</div>
				</div>

				<div className="coffes">
					{finalList.map((e, i) => {
						return (
							<Coffe
								info={e}
								key={i}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Collection;
