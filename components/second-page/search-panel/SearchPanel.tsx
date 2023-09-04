import React, { Dispatch, SetStateAction } from "react";
import "./SearchPanel.sass";

interface Props {
	setSearch: Dispatch<SetStateAction<string>>;
}
const SearchPanel = ({ setSearch }: Props) => {
	return (
		<div className="Market_SearchAndFilter_Search">
			<div className="Market_SearchAndFilter_Search_lookingFor">Looking for</div>
			<input
				type="text"
				placeholder="start typing here..."
				className="Market_SearchAndFilter_Search_input"
				onChange={(event) => setSearch(event.target.value.toLowerCase())}
			/>
		</div>
	);
};

export default SearchPanel;
