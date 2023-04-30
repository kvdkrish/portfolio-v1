import { ISkill } from "@/pages";
import { asRem, styled } from "@/styles/stitchesConfig";
import SvgIcon from "./SvgIcon";

const SkillBlockWrapper = styled("div", {
	ul: {
		$$flexGap: asRem(15),
		display: "flex",
		flexWrap: "wrap",
		gap: "$$flexGap",
		li: {
			flex: "0 0 calc(100% / 4 - $$flexGap)",
			background: "$color3",
			borderRadius: asRem(10),
			padding: asRem(20),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			lineHeight: 1.5,
			label: {
				textAlign: "center",
				marginBottom: asRem(10),
			},
			".star": {
				$$percent: "calc(var(--ratings) / 5 * 100%)",
				display: "inline-block",
				fontSize: asRem(20),
				textAlign: "center",
				"&::before": {
					content: "★★★★★",
					letterSpacing: asRem(3),
					background:
						"linear-gradient(90deg, $colorYellow $$percent, $colorPrimary $$percent)",
					backgroundClip: "text",
					color: "transparent",
				},
				".rating-txt": {
					marginLeft: asRem(5),
					fontSize: asRem(12),
				},
			},
		},
	},
	"@bpTabMax": {
		ul: {
			li: {
				flex: "0 0 calc(100% / 3 - $$flexGap)",
			},
		},
	},
	"@bpMobile": {
		ul: {
			$$flexGap: asRem(5),
			li: {
				flex: "0 0 calc(100% / 2 - $$flexGap)",
			},
		},
	},
});

interface ISkillBlockProps {
	data?: ISkill[];
}

function SkillBlock({ data = [] }: ISkillBlockProps) {
	return (
		<SkillBlockWrapper className="skills">
			<h3>Skills</h3>
			<ul>
				{data?.map(({ id, name, ratings }: ISkill) => (
					<li key={id}>
						<label>{name}</label>
						<span
							className="star"
							style={{ "--ratings": ratings } as React.CSSProperties}
						>
							<br />
							<span className="rating-txt">{`${ratings} out of 5`}</span>
						</span>
					</li>
				))}
			</ul>
		</SkillBlockWrapper>
	);
}

export default SkillBlock;
