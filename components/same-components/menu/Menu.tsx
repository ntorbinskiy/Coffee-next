import React from "react";

import "./Menu.sass";
import Link from "next/link";

interface Props {
	color: string;
	align?: string;
}

const Menu = ({ color, align }: Props) => {
	let className = "Menu_link_item";
	let className2 = "Menu";
	let className3 = "Menu_link";
	if (color === "black") {
		className += " black";
	}
	if (align === "center") {
		className2 += " center";
		className3 += " flex";
	}
	return (
		<div className={className2}>
			<div className="Menu_burger">
				<span className="Menu_burger_span"></span>
			</div>
			<div className={className3}>
				<Link href="/">
					<img
						src={color === "black" ? "img/logo/logoBlack2.png" : "img/logo/logoWhite.png"}
						alt="#"
						className="Menu_link_item Menu_link_item_logo"
					/>
				</Link>
				<Link
					href="/thirdpage"
					className={className}>
					Coffee house
				</Link>
				<Link
					href="/secondpage"
					className={className}>
					Our coffee
				</Link>
				<Link
					href="/fourthpage"
					className={className}>
					For your pleasure
				</Link>
			</div>
		</div>
	);
};

export default Menu;
