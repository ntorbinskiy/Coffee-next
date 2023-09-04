/* eslint-disable default-case */
import { CoffeeItem } from "@/app/secondpage/page";
import CardsItem from "./cards-item/CardsItem";

import "./Cards.sass";

interface Props {
	coffeeList: CoffeeItem[];
}

const Cards = ({ coffeeList }: Props) => {
	if (coffeeList.length === 0) {
		return <div style={{ textAlign: "center", fontSize: "20px" }}>No goods!</div>;
	}

	return (
		<>
			<section className="Cards">
				{coffeeList.map((item, index) => (
					<CardsItem
						key={index}
						title={item.title}
						country={item.country}
						cost={item.cost}
					/>
				))}
			</section>
		</>
	);
};

export default Cards;
