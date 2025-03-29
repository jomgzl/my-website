import Card from "./Card.tsx";
import "../CSS/CardList.css";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

interface Skill {
	name: string;
	logo: string;
}

interface Data {
	id: number;
	heading: string;
	logo: string;
	skills: Skill[];
}

interface Props {
	listOfSkills: Data[];
}

function CardList({ listOfSkills }: Props) {
	const [show, setShow] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div id="skills" className="container-general-skills">
			<div
				className={`container container-card-list box-card-list ${
					show ? "animate-card-list" : ""
				}`}
			>
				<h1 className="skills-title">
					<Trans i18nKey="skills" />
				</h1>
				<div className="cards">
					{listOfSkills.map((data) => (
						<Card key={data.id} {...data}></Card>
					))}
				</div>
			</div>
		</div>
	);
}

export default CardList;
