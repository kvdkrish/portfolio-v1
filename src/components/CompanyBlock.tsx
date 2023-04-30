import { ICompany } from "@/pages";
import { asRem, styled } from "@/styles/stitchesConfig";
import { useCallback } from "react";

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

const CompanyBlockWrapper = styled("div", {
	ul: {
		$$flexGap: asRem(15),
		display: "flex",
		flexWrap: "wrap",
		gap: "$$flexGap",
	},
});

interface ICompanyBlockProps {
	data?: ICompany[];
}

function CompanyBlock({ data = [] }: ICompanyBlockProps) {
	const getDateFormat = useCallback((val: string = "") => {
		if (!val) return val;
		const date = new Date(val);
		return [
			date?.toLocaleString("default", { month: "short" }),
			date?.getFullYear(),
		]?.join(" ");
	}, []);

	return (
		<CompanyBlockWrapper className="company">
			<h3>Companies, I have worked for in the past</h3>
			<ul>
				{data?.map(
					({ id, name, role, startYear, endYear, current }: ICompany) => (
						<LiWrapper key={id}>
							<h4>{name}</h4>
							<hr />
							<table width={"100%"}>
								<tbody>
									<tr>
										<td>Role:</td>
										<td>{role}</td>
									</tr>
									<tr>
										<td>Period:</td>
										<td>
											{[
												getDateFormat(startYear),
												current ? "current" : getDateFormat(endYear),
											]?.join(" - ")}
										</td>
									</tr>
								</tbody>
							</table>
							{/* <div>
								<strong>Role:</strong>&nbsp;{role}
							</div>
							<div>
								<strong>Duration:</strong>
								&nbsp;
								{[
									getDateFormat(startYear),
									current ? "current" : getDateFormat(endYear),
								]?.join(" - ")}
							</div> */}
						</LiWrapper>
					)
				)}
			</ul>
		</CompanyBlockWrapper>
	);
}

export default CompanyBlock;
