import { useState } from "react";
import "../CSS/Experience.css";
import { useTranslation } from "react-i18next";

interface Props {
	id: number;
	title: string;
	date: string;
	logo: string;
	description: string;
	tasks: string[];
	skills: string[];
}

function Experience({
	id,
	logo,
	tasks,
	skills,
}: Props) {
	let [showDetails, setShowDetails] = useState(false);
	const { t } = useTranslation();

	const showExperienceDetails = () => {
		setShowDetails(!showDetails);
	};

	return (
		<div
			className={`experience-master ${
				showDetails ? "long-padding" : "short-padding"
			} `}
		>
			<div className="experience-head" onClick={showExperienceDetails}>
				<div className="experience-information">
					<h4 className="experience-date">
						{t(`experiences.${id}.date`)}
					</h4>
					<img
						src={logo}
						className={`${
							logo === "bsynchro.svg"
								? "bsynchro-logo"
								: "company-logo"
						}`}
						alt="company-logo"
					/>
					<h4>{t(`experiences.${id}.title`)}</h4>
				</div>
				<img
					src="down-arrow.svg"
					className={`down-arrow ${showDetails ? "rotate" : ""}`}
					alt="down arrow"
				/>
			</div>
			<div
				className={`${
					showDetails
						? "experience-details-show"
						: "experience-details"
				}`}
			>
				<div className="experience-description-head">
					<div>
						<img src="" alt="" />
						<h5>Description</h5>
					</div>
					<p className="experience-description">
						{t(`experiences.${id}.description`)}
					</p>
				</div>
				<div className="experience-tasks-head">
					<h5>{t("tasks")}</h5>
					<ul className="experience-tasks">
						{tasks.map((task) => (
							<li className="experience-task">
								{t(`experiences.${id}.tasks.${task}`)}
							</li>
						))}
					</ul>
				</div>
				<div className="experience-skills-head">
					<h5>{t("skills")}</h5>
					<div className="experience-skills">
						{skills.map((skill) => (
							<div key={skill} className="experience-skill">
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
