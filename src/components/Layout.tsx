import { asRem, styled } from "@/styles/stitchesConfig";
import TopBar from "./TopBar";
import { Inter } from "next/font/google";
import ClientRender from "./ClientRender";
import SideMenu from "./SideMenu";
import { useCallback, useEffect, useRef, useState } from "react";
import { getLocalStorage, setLocalStorage } from "@/utils/common";

const inter = Inter({ subsets: ["latin"] });

const ContentWrapper = styled("div", {
	position: "relative",
	height: "calc(100vh - $$topbarHeight)",
	overflow: "auto",
	"main >div": {
		"&:not(:last-child)": {
			paddingTop: asRem(50),
			width: "80%",
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	"&::-webkit-scrollbar": {
		display: "none",
	},
	"@bpTabMax": {
		"main >div": {
			"&:not(:last-child)": {
				padding: `${asRem(20)} $$xAxisPadding 0 $$xAxisPadding`,
				width: "100%",
			},
		},
	},
	"@bpMobile": {
		".intro": {
			padding: 0,
		},
	},
});

const HeaderWrapper = styled("div", {
	position: "sticky",
	top: 0,
	background: "$color2",
	height: "$$topbarHeight",
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: `${asRem(0)} ${asRem(20)}`,
	boxShadow: `0 ${asRem(5)} ${asRem(3)} -${asRem(3)} $shadowWhite`,
	zIndex: 1,
	"@bpTabMedium": {
		padding: `${asRem(30)} ${asRem(20)} ${asRem(20)}`,
	},
	"@bpMobile": {
		padding: `${asRem(0)} ${asRem(20)}`,
	},
});

const LayoutWrapper = styled("div", {
	$$topbarHeight: asRem(60),
	$$yAxisPadding: asRem(20),
	$$xAxisPadding: asRem(20),
	position: "relative",
	"&.prevent-scroll": {
		overflow: "hidden",
	},
	"@bpTabMedium": {
		$$topbarHeight: asRem(90),
	},
	"@bpMobile": {
		$$topbarHeight: asRem(60),
	},
});

interface ILayoutProps {
	children: React.ReactElement;
}

export interface INavValue {
	label?: string;
	scrollEleName?: string;
}

function Layout({ children }: ILayoutProps) {
	const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
	const isMounted = useRef<boolean>(false);
	const navData: INavValue[] = [
		{ label: "Introduction", scrollEleName: ".intro" },
		{ label: "Skills", scrollEleName: ".skills" },
		{ label: "Experience", scrollEleName: ".company" },
		{ label: "Project", scrollEleName: ".project" },
		{ label: "Own project", scrollEleName: ".playground" },
		{ label: "Education", scrollEleName: ".education" },
		{ label: "About", scrollEleName: ".about" },
	];

	const handleOnClose = useCallback(() => {
		setShowSideMenu(false);
	}, []);

	const handleOnToggle = useCallback((val: boolean = false) => {
		setShowSideMenu(val);
	}, []);

	const handleOnScroll = (e: any) => {
		setLocalStorage("scrollPosition", e.currentTarget.scrollTop);
	};

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		const ele = document.querySelector(".content");
		ele?.scrollTo({ top: getLocalStorage("scrollPosition", 0) });
	}, [isMounted]);

	return (
		<LayoutWrapper
			className={`layout ${inter.className} ${
				showSideMenu ? "prevent-scroll" : ""
			}`}
		>
			<SideMenu data={navData} show={showSideMenu} onClose={handleOnClose} />
			<HeaderWrapper>
				<ClientRender>
					<TopBar
						data={navData}
						hasSideMenu={showSideMenu}
						onToggle={handleOnToggle}
					/>
				</ClientRender>
			</HeaderWrapper>
			<ContentWrapper className="content" onScroll={handleOnScroll}>
				{children}
			</ContentWrapper>
		</LayoutWrapper>
	);
}

export default Layout;
