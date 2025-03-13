import { useState } from "react";
import "../CSS/Card.css";

interface Skill {
	name: string;
	logo: string;
}

interface Props {
	skills: Skill[];
	heading: string;
	logo: string;
}

function Card({ skills, heading, logo }: Props) {
	let [flipCard, setFlipCard] = useState(false);

	const clickFlip = () => {
		setFlipCard(!flipCard);
	};

	const skillsList = skills.map((skill) => (
		<li key={skill.name} className="list-group-item">
			<img
				src={skill.logo}
				alt={skill.name}
				className={`skill-logo ${
					skill.name === "Node.js" || "SQL" ? "node-logo" : ""
				} `}
			/>
			{skill.name}
		</li>
	));

	const fullCard = (
		<div className="card-custom">
			<div className={`inner ${flipCard ? "flip" : ""} `}>
				<div className="front-card">
					<div className="card-header-cst">
						<img
							src={logo}
							className="card-img-top custom-card-img-top"
							alt="category-logo"
						/>
						{heading}
					</div>
					<button
						type="button"
						className="button-test button-flip"
						onClick={clickFlip}
					>
						The List !
					</button>
				</div>
				<div className="back-card" onClick={clickFlip}>
					<div className="card-header-cst">
						<img
							src={logo}
							className="card-img-top custom-card-img-top"
							alt="category-logo"
						/>
						{heading}
					</div>
					<ul className="list-group list-group-flush list-skills">
						{skillsList}
					</ul>
				</div>
			</div>
		</div>
	);

	return fullCard;
}

export default Card;
