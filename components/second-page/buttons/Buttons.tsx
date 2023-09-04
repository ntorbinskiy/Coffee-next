import React, { Dispatch, SetStateAction } from "react";
import "./Buttons.sass";
import { CoffeeCountry } from "@/app/secondpage/page";

interface Props {
	onFilter: Dispatch<SetStateAction<"" | CoffeeCountry>>;
}

const Buttons = ({ onFilter }: Props) => {
	return (
		<div className="Market_SearchAndFilter_Filter">
			<div className="Market_SearchAndFilter_Filter_orFilter">Or filter</div>
			<div className="Market_SearchAndFilter_Filter_buttons">
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter("Brazil")}>
					Brazil
				</button>
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter("Kenya")}>
					Kenya
				</button>
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter("Columbia")}>
					Columbia
				</button>
				<button
					type="button"
					className="Market_SearchAndFilter_Filter_buttons_item"
					onClick={() => onFilter("")}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Buttons;
