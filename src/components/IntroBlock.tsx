import { IAuthor } from "@/pages";
import { asRem, styled, animateSlideIn } from "@/styles/stitchesConfig";
import { scrollToEle } from "@/utils/common";
import { StructuredText, Image } from "react-datocms";

const IntroBlockWrapper = styled("div", {
	minHeight: asRem(300),
	display: "flex",
	lineHeight: 2,
	gap: asRem(20),
	animation: `${animateSlideIn} 1s`,
	">div": {
		flex: 1,
	},
	h2: {
		span: {
			color: "violet",
		},
	},
	".profile-img": {
		borderRadius: "10%",
	},
	button: {
		background: "transparent",
		cursor: "pointer",
		border: "none",
		outline: "none",
		fontSize: asRem(16),
		padding: 0,
		color: "violet",
	},
	"@bpTabMax": {
		".profile-img": {
			flex: "1 0 50%",
			height: asRem(400),
		},
		">div": {
			flex: "1 0 50%",
		},
	},
	"@bpMobile": {
		padding: "0 !important",
		flexDirection: "column-reverse",
		">div": {
			padding: "0 $$yAxisPadding",
		},
		".profile-img": {
			borderRadius: "revert",
			maxWidth: "revert !important",
		},
	},
});

interface IIntroProps {
	data?: IAuthor;
}

function IntroBlock({ data = {} }: IIntroProps) {
	return (
		<IntroBlockWrapper className="intro">
			<div>
				<h2>
					Hi, my name is <span>{data?.name}</span>
				</h2>
				<StructuredText data={data?.description} />
				<span>
					To contact: &nbsp;
					<button type="button" onClick={() => scrollToEle(".about")}>
						click me
					</button>
				</span>
			</div>
			<Image className="profile-img" data={data?.image?.responsiveImage} />
		</IntroBlockWrapper>
	);
}

export default IntroBlock;
