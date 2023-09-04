"use client";

import Cards from "@/components/same-components/cards/Cards";
import Footer from "@/components/same-components/footer/Footer";
import Header from "@/components/same-components/header/Header";
import Mid from "@/components/same-components/mid/Mid";
import Buttons from "@/components/second-page/buttons/Buttons";
import SearchPanel from "@/components/second-page/search-panel/SearchPanel";
import { NextPage } from "next";

import "../../style/SecondPage.sass";
import { useEffect, useState } from "react";

export type CoffeeCountry = "Brazil" | "Kenya" | "Columbia" | "";

export interface CoffeeItem {
	title: string;
	country: CoffeeCountry;
	cost: number;
}

const coffeeList: CoffeeItem[] = [
	{
		title: "AROMISTICO Coffee",
		country: "Brazil",
		cost: 3.5,
	},
	{
		title: "Columbia Coffee",
		country: "Columbia",
		cost: 10.5,
	},
	{
		title: "Kenya Coffee",
		country: "Kenya",
		cost: 8.5,
	},
];

const filterCoffeeItems = (coffeeItems: CoffeeItem[], filterValue: CoffeeCountry): CoffeeItem[] => {
	switch (filterValue) {
		case "Brazil":
			return coffeeItems.filter((item) => item.country === "Brazil");
		case "Columbia":
			return coffeeItems.filter((item) => item.country === "Columbia");
		case "Kenya":
			return coffeeItems.filter((item) => item.country === "Kenya");

		default: {
			return coffeeItems;
		}
	}
};

const filterSearchResult = (searchValue: string, coffeeList: CoffeeItem[]): CoffeeItem[] => {
	if (searchValue.length === 0) {
		return coffeeList;
	}

	return coffeeList.filter((item) => item.title.toLowerCase().indexOf(searchValue) > -1);
};
const SecondPage: NextPage = () => {
	const [searchValue, setSearchValue] = useState("");
	const [filterValue, setFilterValue] = useState<CoffeeCountry | "">("");
	const [coffeeListValue, setCoffeeListValue] = useState<CoffeeItem[]>(coffeeList);

	useEffect(() => {
		setCoffeeListValue(filterCoffeeItems(coffeeList, filterValue));
	}, [filterValue]);

	useEffect(() => {
		setCoffeeListValue(filterSearchResult(searchValue, coffeeList));
	}, [searchValue]);

	return (
		<div>
			<Header title={"Our Coffee"} />
			<Mid
				img="img/second/img2.png"
				div={
					<div className="AboutUs_text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						<br /> <br />
						Afraid at highly months do things on at. Situation recommend objection do intention so questions.
						<br />
						As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.
					</div>
				}
				text={"About our beans"}
			/>
			<section className="Market">
				<div className="Market_SearchAndFilter">
					<SearchPanel setSearch={setSearchValue} />
					<Buttons onFilter={setFilterValue} />
				</div>
			</section>
			<Cards coffeeList={coffeeListValue} />
			<Footer />
		</div>
	);
};

export default SecondPage;
