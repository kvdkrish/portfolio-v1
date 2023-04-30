import { IEducation } from "@/pages";
import { asRem, styled } from "@/styles/stitchesConfig";

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
	hr: {
		width: "100%",
		border: `${asRem(0.5)} solid $colorYellow`,
		marginBottom: asRem(20),
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
			<h3>Education</h3>
			<ul>
				{data?.map(
					({
						id,
						instituteName,
						course,
						grade,
						startYear,
						endYear,
					}: IEducation) => (
						<LiWrapper key={id}>
							<h4>{instituteName}</h4>
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
