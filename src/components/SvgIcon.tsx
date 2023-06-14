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
	phone: {
		width: "24",
		height: "24",
		viewBox: "0 0 48 48",
		path: (
			<>
				<defs>
					<style>{`.c{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-width: 2px;}`}</style>
				</defs>
				<path
					className="c"
					d="m15.1072,20.294l2.9566-2.9567c1.2746-1.2746,1.7621-3.1438,1.2442-4.8703-.4234-1.4115-.7215-2.8773-.8813-4.3843-.1571-1.4812-1.449-2.5826-2.9385-2.5826h-6.9092c-1.7767,0-3.1454,1.5345-2.989,3.3043,1.5754,17.8285,15.7771,32.0302,33.6056,33.6056,1.7698.1564,3.3043-1.2073,3.3043-2.9839v-6.1595c0-2.2488-1.1015-3.5362-2.5826-3.6932-1.507-.1598-2.9728-.4579-4.3843-.8813-1.7266-.5179-3.5957-.0304-4.8704,1.2442l-2.9566,2.9566"
				/>
				<path
					className="c"
					d="m11.3925,5.5c0,2.6273.3257,5.1785.9389,7.6155,3.3968,13.4987,15.6156,23.492,30.1685,23.492"
				/>
			</>
		),
	},
	linkedin: {
		width: "24",
		height: "24",
		viewBox: "0 0 192 192",
		path: (
			<>
				<rect
					width="132"
					height="132"
					x="30"
					y="30"
					stroke="#FFFFFF"
					strokeWidth="12"
					rx="16"
				/>
				<path
					stroke="#FFFFFF"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="12"
					d="M66 86v44"
				/>
				<circle cx="66" cy="64" r="8" fill="#FFFFFF" />
				<path
					stroke="#FFFFFF"
					strokeLinecap="round"
					strokeWidth="12"
					d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
				/>
			</>
		),
	},
	email: {
		width: "24",
		height: "24",
		viewBox: "0 0 24 24",
		path: (
			<>
				<path
					d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
					stroke="#FFFFFF"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<rect
					x="3"
					y="5"
					width="18"
					height="14"
					rx="2"
					stroke="#FFFFFF"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</>
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
