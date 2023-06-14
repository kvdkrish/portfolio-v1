import { IEducation } from "@/pages";
import {
	animateFillLeft,
	animateSlideIn,
	asRem,
	styled,
} from "@/styles/stitchesConfig";

const LiWrapper = styled("li", {
	background: "$color3",
	borderRadius: asRem(10),
	padding: asRem(20),
	width: "100%",
	lineHeight: 1.5,
	display: "flex",
	flexDirection: "column",
	flex: "0 0 calc(100% / 3 - $$flexGap)",
	h4: {
		textAlign: "center",
	},
	p: {
		textAlign: "center",
		margin: 0,
		color: "$colorGrey",
		fontSize: asRem(12),
	},
	hr: {
		width: "100%",
		border: `${asRem(0.5)} solid $colorYellow`,
		marginBottom: asRem(20),
		animation: `${animateFillLeft} 2s`,
	},
	table: {
		tr: {
			td: {
				verticalAlign: "top",
				paddingBottom: asRem(10),
				"&:last-child": {
					textAlign: "right",
				},
			},
		},
	},
	"@bpTabMax": {
		flex: "0 0 calc(100% / 2 - $$flexGap)",
	},
	"@bpMobile": {
		flex: "1 0 calc(100% / 1 - $$flexGap)",
	},
});

const EducationBlockWrapper = styled("div", {
	animation: `${animateSlideIn} 1s`,
	ul: {
		$$flexGap: asRem(15),
		display: "flex",
		flexWrap: "wrap",
		gap: "$$flexGap",
	},
});

interface IEducationBlockProps {
	data?: IEducation[];
}

function EducationBlock({ data = [] }: IEducationBlockProps) {
	return (
		<EducationBlockWrapper className="education">
			<h3>EDUCATION</h3>
			<ul>
				{data?.map(
					({
						id,
						instituteName,
						course,
						grade,
						startYear,
						endYear,
						location,
					}: IEducation) => (
						<LiWrapper key={id}>
							<h4>{instituteName}</h4>
							<p>{location}</p>
							<hr />
							<table width={"100%"}>
								<tbody>
									<tr>
										<td width={"20%"}>Course:</td>
										<td width={"80%"}>{course}</td>
									</tr>
									<tr>
										<td>Grade:</td>
										<td>{`${grade}/10`}</td>
									</tr>
									<tr>
										<td>Period:</td>
										<td>{[startYear, endYear]?.join(" - ")}</td>
									</tr>
								</tbody>
							</table>
						</LiWrapper>
					)
				)}
			</ul>
		</EducationBlockWrapper>
	);
}

export default EducationBlock;
