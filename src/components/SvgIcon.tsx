interface IIconValue {
	width: string;
	height: string;
	viewBox: string;
	path: React.ReactElement;
}

interface IIcon {
	[key: string]: IIconValue;
}

interface IOptions {
	fill?: string;
	stroke?: string;
	strokeWidth?: string;
}

interface ISvgIconProps {
	name: string;
	className?: string;
	options?: IOptions;
	onClick?: () => void;
}

const icons: IIcon = {
	burgerMenu: {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		path: (
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
				fill="#ffffff"
			/>
		),
	},
};

function SvgIcon({
	className = "",
	name = "",
	onClick,
	options = {},
}: ISvgIconProps) {
	const svgData = icons?.[name] || null;

	if (!svgData) return null;
	return (
		<svg
			className={className}
			width={svgData?.width}
			height={svgData?.height}
			viewBox={svgData?.viewBox}
			fill="none"
			onClick={onClick}
			{...options}
		>
			{svgData?.path}
		</svg>
	);
}

export default SvgIcon;
