import "./Logo.sass";

interface Props {
	edition: string;
	style?: object;
	style2?: object;
}

const Logo = ({ edition, style, style2 }: Props) => {
	let className = "header_Middle_logo_div";
	if (edition === "black") {
		className += " colorBlack";
	}
	return (
		<>
			<div
				className="header_Middle_logo"
				style={style}>
				<div
					className={className}
					style={style2}>
					<img
						src={edition === "black" ? "img/logo/logoBlack2.png" : "img/logo/logoWhite.png"}
						className="header_Middle_logo_img"
						alt="#"
					/>
				</div>
			</div>
		</>
	);
};

export default Logo;
