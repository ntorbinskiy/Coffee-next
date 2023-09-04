import React from "react";
import Menu from "../menu/Menu";
import "./Header.sass";

interface Props {
	title: string;
	img?: string;
}

const header = ({ title, img }: Props) => {
	return (
		<>
			<section
				className="header_2"
				style={img ? { backgroundImage: `url(${img})` } : undefined}>
				<Menu
					color="white"
					align="def"
				/>
				<h1 className="header_2_OurCoffee">{title}</h1>
			</section>
		</>
	);
};

export default header;
