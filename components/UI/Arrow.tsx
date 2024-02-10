const Arrow: React.FC<{ colour: string; rotate: string }> = (props) => {
	return (
		<svg
			width="18"
			height="50"
			viewBox="0 0 25 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			transform={props.rotate}
		>
			<path
				d="M23 41L5 23L23 5"
				stroke={props.colour}
				stroke-width="6"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default Arrow;
