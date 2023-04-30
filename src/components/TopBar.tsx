import { asRem, styled } from "@/styles/stitchesConfig";
import { scrollToEle } from "@/utils/common";
import SvgIcon from "./SvgIcon";
import useViewPort from "@/hooks/useViewPort";
import { useCallback } from "react";
import { INavValue } from "./Layout";

const TopBarWrapper = styled("div", {
	position: "relative",
	button: {
		cursor: "pointer",
		background: "transparent",
		color: "$colorPrimary",
		border: "none",
		outline: "none",
		padding: `${asRem(10)} ${asRem(20)}`,
		fontSize: asRem(14),
		textTransform: "uppercase",
		transition: "transform 0.2s linear",
		"&:hover": {
			color: "$colorYellow",
			transform: "scale(0.9)",
		},
	},
	"svg.disabled": {
		pointerEvents: "none",
	},
});

interface ITopbarProps {
	data?: INavValue[];
	hasSideMenu?: boolean;
	onToggle?: (x?: boolean) => void;
}

function TopBar({ data = [], hasSideMenu, onToggle }: ITopbarProps) {
	const { mobileView } = useViewPort();

	return (
		<TopBarWrapper className="topbar">
			{mobileView ? (
				<SvgIcon
					className={hasSideMenu ? "disabled" : ""}
					name="burgerMenu"
					options={{ stroke: "#ffffff" }}
					onClick={() => onToggle?.(true)}
				/>
			) : (
				<>
					{data?.map(({ label, scrollEleName = "" }: INavValue) => (
						<button
							key={label}
							type="button"
							onClick={() => scrollToEle(scrollEleName)}
						>
							{label}
						</button>
					))}
				</>
			)}
		</TopBarWrapper>
	);
}

export default TopBar;
