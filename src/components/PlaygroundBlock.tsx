import React from "react";
import { animateSlideIn, asRem, styled } from "@/styles/stitchesConfig";
import { IPlayground, ISkill } from "@/pages";
import { StructuredText } from "react-datocms/structured-text";

const PlaygroundBlockWrapper = styled("div", {
	overflow: "hidden",
	animation: `${animateSlideIn} 1s`,
	ul: {
		background: "$color3",
		padding: asRem(20),
		borderRadius: asRem(10),
		li: {
			display: "flex",
			marginBottom: asRem(30),
			gap: asRem(15),
			".left-part, .right-part": {
				lineHeight: 1.5,
				p: {
					margin: `0 0 ${asRem(10)} 0`,
				},
				"&:is(.left-part)": {
					flex: "0 0 20%",
					display: "flex",
					flexDirection: "column",
					borderRadius: asRem(10),
					padding: asRem(10),
					background: "$color2",
					h4: {
						textAlign: "center",
						marginBottom: asRem(10),
					},
					ul: {
						background: "transparent",
						listStyle: "disc",
						paddingTop: 0,
						paddingBottom: 0,
						li: {
							display: "list-item",
							margin: 0,
						},
					},
				},
				"&:is(.right-part)": {
					flex: "0 0 75%",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					ul: {
						listStyle: "disc",
						li: {
							display: "list-item",
							marginBottom: 0,
						},
					},
					".link-info": {
						marginTop: asRem(20),
						p: {
							marginBottom: asRem(2),
						},
						a: {
							color: "$color5",
						},
					},
				},
			},
			".vl-divider": {
				border: `${asRem(1)} solid $colorYellow`,
				width: asRem(1),
			},
		},
	},
	"@bpMobile": {
		ul: {
			li: {
				flexDirection: "column",
				".vl-divider": {
					width: "100%",
				},
			},
		},
	},
});

interface IPlaygroundBlockProps {
	data?: IPlayground[];
}

function PlaygroundBlock({ data }: IPlaygroundBlockProps) {
	return (
		<PlaygroundBlockWrapper className="playground">
			<h3>OWN PROJECTS</h3>
			<ul>
				{data?.map(
					({ id, name, description, stacks, gitLinks }: IPlayground) => (
						<li key={id}>
							<div className="left-part">
								<h4>{name}</h4>
								<div>Stacks:</div>
								<ul className="skill-list">
									{stacks?.map(({ id, name }: ISkill) => (
										<li key={id}>{name}</li>
									))}
								</ul>
							</div>
							<div className="vl-divider" />
							<div className="right-part">
								<StructuredText data={description} />
								<div
									className="link-info"
									dangerouslySetInnerHTML={{ __html: gitLinks }}
								/>
							</div>
						</li>
					)
				)}
			</ul>
		</PlaygroundBlockWrapper>
	);
}

export default React.memo(PlaygroundBlock);
