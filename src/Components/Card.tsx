import { useState } from "react";
import "../CSS/Card.css";

interface Skill {
	name: string;
	logo: string;
}

interface Props {
	id: number;
	skills: Skill[];
	heading: string;
	logo: string;
}

function Card({ id, skills, heading, logo }: Props) {
	// let [flipCard, setFlipCard] = useState(false);
	let [isHovered, setIsHovered] = useState(false);
	let [isActive, setIsActive] = useState<number | null>(null);

	const activeCard = (id: number) => {
		setIsActive(id);

		const cardsToFlip = [id, (id % 3) + 1, (id % 3) + 1 + 1];
		const delay = 300;

		cardsToFlip.forEach((card, index) =>
			setTimeout(() => {
				setIsActive((prev) => (prev === id ? card : prev));
			}, delay * index)
		);
	};

	// const clickFlip = () => {
	// 	setFlipCard(!flipCard);
	// };

	// const hoverButton = () => {
	// 	setIsHovered(!isHovered);
	// };

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
		// <div className={`card-custom ${isHovered ? "card-custom-hover" : ""}`}>
		// 	<div className={`inner ${isActive === id ? "flip" : ""}`}>
		<div
			className={`card-custom ${isHovered ? "card-custom-hover" : ""}`}
			onMouseEnter={() => {
				setIsActive(id);
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsActive(null);
				setIsHovered(false);
			}}
		>
			<div className={`inner ${isActive === id ? "flip" : ""}`}>
				<div
					className="front-card"
					// onClick={clickFlip}
					// onMouseEnter={() => setIsHovered(true)}
					// onMouseLeave={() => setIsHovered(false)}
					// onMouseEnter={() => {
					// 	setIsActive(id);
					// 	setIsHovered(true);
					// }}
					// onMouseLeave={() => {
					// 	setIsActive(null);
					// 	setIsHovered(false);
					// }}
				>
					<div className="card-header-cst-front">
						<img
							src={logo}
							className="card-img-top custom-card-img-top-front"
							alt="category-logo"
						/>
						{heading}
					</div>
				</div>
				<div
					className="back-card"
					// onClick={clickFlip}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div className="card-header-cst-back">
						<img
							src={logo}
							className="card-img-top custom-card-img-top-back"
							alt="category-logo"
						/>
						{heading}
					</div>
					<ul
						className={`list-group list-group-flush ${
							heading === "Soft" ? "soft-skills" : "list-skills"
						}`}
					>
						{skillsList}
					</ul>
				</div>
			</div>
		</div>
	);

	return fullCard;
}

export default Card;
