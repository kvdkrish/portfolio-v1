import { IAuthor, ISkill } from "@/pages";
import { animateSlideIn, asRem, styled } from "@/styles/stitchesConfig";
import SvgIcon from "./SvgIcon";

const AboutBlockWrapper = styled("div", {
	background: "$color2",
	lineHeight: 1.5,
	boxShadow: `0 -${asRem(5)} ${asRem(3)} -${asRem(3)} $shadowWhite`,
	marginTop: asRem(50),
	animation: `${animateSlideIn} 1s`,
	".inner": {
		padding: `${asRem(20)} 0 ${asRem(30)}`,
		width: "80%",
		margin: "auto",
	},
	h3: {
		marginBottom: asRem(10),
	},
	".info-list": {
		$$flexGap: asRem(10),
		display: "flex",
		flexWrap: "wrap",
		gap: "$$flexGap",
		width: "70%",
		flexDirection: "column",
		li: {
			display: "flex",
			alignItems: "flex-start",
			".label-group": {
				minWidth: asRem(75),
				display: "flex",
				justifyContent: "space-between",
				marginRight: asRem(15),
			},
			a: {
				color: "$color5",
				lineBreak: "anywhere",
			},
			svg: {
				marginRight: asRem(5),
				flex: `0 0 ${asRem(24)}`,
			},
		},
	},
	h4: {
		margin: `${asRem(15)} 0 ${asRem(5)}`,
	},
	".stack-list": {
		display: "flex",
		alignItems: "center",
		flexWrap: "wrap",
		gap: asRem(10),
		margin: 0,
		li: {
			background: "$color3",
			padding: `${asRem(5)} ${asRem(10)}`,
			borderRadius: asRem(10),
		},
	},
	"@bpTabMax": {
		marginTop: asRem(20),
		".inner": {
			px: 20,
			width: "100%",
		},
		".info-list": {
			width: "100%",
		},
	},
});

interface IAuthorBlockProps {
	data?: IAuthor;
}

function AboutBlock({ data }: IAuthorBlockProps) {
	return (
		<AboutBlockWrapper className="about">
			<div className="inner">
				<h3>ABOUT</h3>
				<ul className="info-list">
					<li>
						<div className="label-group">
							<SvgIcon name="email" />
							<div>{data?.email}</div>
						</div>
					</li>
					<li>
						<div className="label-group">
							<SvgIcon name="phone" options={{ fill: "#FFFFFF" }} />
							<div>{data?.mobile}</div>
						</div>
					</li>
					<li>
						<div className="label-group">
							<SvgIcon name="linkedin" />
							<a href={data?.linkedin} target="_blank">
								{data?.linkedin}
							</a>
						</div>
					</li>
				</ul>
				<h4>Stacks used to build the portfolio site:</h4>
				<ul className="stack-list">
					{data?.portfolioStacks?.map(({ id, name }: ISkill) => (
						<li key={id}>{name}</li>
					))}
				</ul>
			</div>
		</AboutBlockWrapper>
	);
}

export default AboutBlock;
