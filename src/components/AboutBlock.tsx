import { IAuthor, ISkill } from "@/pages";
import { asRem, styled } from "@/styles/stitchesConfig";

const AboutBlockWrapper = styled("div", {
	background: "$color2",
	lineHeight: 1.5,
	boxShadow: `0 -${asRem(5)} ${asRem(3)} -${asRem(3)} $shadowWhite`,
	marginTop: asRem(50),
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
		width: "60%",
		li: {
			display: "flex",
			flex: `1 0 calc(100% / 2 - $$flexGap)`,
			maxWidth: asRem(275),
			".label-group": {
				minWidth: asRem(75),
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				marginRight: asRem(15),
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
		marginTop: asRem(0),
		".inner": {
			// paddingLeft: asRem(20),
			// paddingRight: asRem(20),
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
				<h3>About</h3>
				<ul className="info-list">
					<li>
						<div className="label-group">
							<span>Email</span>
							<span>:</span>
						</div>
						<div>{data?.email}</div>
					</li>
					<li>
						<div className="label-group">
							<span>LinkedIn</span>
							<span>:</span>
						</div>
						<div>{data?.linkedin}</div>
					</li>
					<li>
						<div className="label-group">
							<span>Mobile</span>
							<span>:</span>
						</div>
						<div>{data?.mobile}</div>
					</li>
					<li>
						<div className="label-group">
							<span>Git link</span>
							<span>:</span>
						</div>
						<div>{data?.gitLink}</div>
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
