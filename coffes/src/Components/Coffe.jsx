import starFill from "../assets/Star_fill.svg";
import starEmpty from "../assets/Star.svg";

const Coffe = ({ info }) => {
	const { title, price, star, votes, popular, available, img } = info;
	return (
		<div className="container-coffe">
			{popular && <p className="popular">Popular</p>}
			<img
				src={img}
				alt="img"
				className="coffe-img"
			/>

			<div className="text">
				<div className="top">
					<p className="title">{title}</p>
					<p className="price">${price}</p>
				</div>

				<div className="valutation">
					{!(star == 0) ? (
						<>
							<img
								src={starFill}
								alt="fill"
							/>
							<p className="val-text">
								{star} <span>({votes} votes)</span>
							</p>
						</>
					) : (
						<>
							<img
								src={starEmpty}
								alt="empty"
							/>
							<p className="val-text">
								<span>No ratings</span>
							</p>
						</>
					)}

					{!available && <p className="sold-out">Sold out</p>}
				</div>
			</div>
		</div>
	);
};

export default Coffe;
