import { asRem, styled } from "@/styles/stitchesConfig";
import TopBar from "./TopBar";
import { Inter } from "next/font/google";
import ClientRender from "./ClientRender";
import SideMenu from "./SideMenu";
import { useCallback, useState } from "react";

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
	padding: `0 ${asRem(20)}`,
	boxShadow: `0 ${asRem(5)} ${asRem(3)} -${asRem(3)} $shadowWhite`,
	zIndex: 1,
});

const LayoutWrapper = styled("div", {
	$$topbarHeight: asRem(60),
	$$yAxisPadding: asRem(20),
	$$xAxisPadding: asRem(20),
	position: "relative",
	"&.prevent-scroll": {
		overflow: "hidden",
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
	const navData: INavValue[] = [
		{ label: "Introduction", scrollEleName: ".intro" },
		{ label: "Skills", scrollEleName: ".skills" },
		{ label: "Companies", scrollEleName: ".company" },
		{ label: "Projects", scrollEleName: ".project" },
		{ label: "Educations", scrollEleName: ".education" },
		{ label: "About", scrollEleName: ".about" },
	];

	const handleOnClose = useCallback(() => {
		setShowSideMenu(false);
	}, []);

	const handleOnToggle = useCallback((val: boolean = false) => {
		setShowSideMenu(val);
	}, []);

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
			<ContentWrapper>{children}</ContentWrapper>
		</LayoutWrapper>
	);
}

export default Layout;
