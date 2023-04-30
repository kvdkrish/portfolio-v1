import { asRem, styled } from "@/styles/stitchesConfig";
import { scrollToEle } from "@/utils/common";
import { INavValue } from "./Layout";
import { useEffect, useRef } from "react";
import SvgIcon from "./SvgIcon";

const SideMenuWrapper = styled("div", {
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	background: "$color4",
	zIndex: 3,
	width: 0,
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	transition: "all 0.2s linear",
	"&.show": {
		padding: `${asRem(30)} ${asRem(20)}`,
		width: asRem(200),
	},
	button: {
		cursor: "pointer",
		background: "transparent",
		color: "$colorPrimary",
		border: "none",
		outline: "none",
		padding: `${asRem(10)} ${asRem(0)}`,
		fontSize: asRem(12),
		textTransform: "uppercase",
	},
});

interface ISideMenuProps {
	data?: INavValue[];
	show?: boolean;
	onClose?: () => void;
}

function SideMenu({ data = [], show = false, onClose }: ISideMenuProps) {
	const ref = useRef<any>(null);
	const isOpen = useRef<boolean>(false);

	const handleOnClick = (val: string = "") => {
		scrollToEle(val);
		onClose?.();
	};

	const handleClickOutside = (event: any) => {
		if (!ref?.current?.contains(event?.target) && isOpen?.current) {
			isOpen.current = false;
			onClose?.();
		} else isOpen.current = true;
	};

	useEffect(() => {
		window.addEventListener("click", handleClickOutside, true);
		return () => window.removeEventListener("click", handleClickOutside);
	}, [handleClickOutside]);

	return (
		<SideMenuWrapper className={`side-menu ${show ? "show" : ""}`} ref={ref}>
			{show && (
				<>
					{data?.map(({ label, scrollEleName = "" }: INavValue) => (
						<button
							key={label}
							type="button"
							onClick={() => handleOnClick(scrollEleName)}
						>
							{label}
						</button>
					))}
				</>
			)}
		</SideMenuWrapper>
	);
}

export default SideMenu;
