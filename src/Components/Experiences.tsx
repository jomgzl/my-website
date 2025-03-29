import "../CSS/Experiences.css";
import Experience from "./Experience";
import { useTranslation } from "react-i18next";

interface Experiences {
	id: number;
	title: string;
	date: string;
	logo: string;
	description: string;
	tasks: string[];
	skills: string[];
}

interface Props {
	listOfExperiences: Experiences[];
}

function Experiences({ listOfExperiences }: Props) {
	const { t } = useTranslation();

	return (
		<div id="work-experiences" className="container-general-experiences">
			<div className="container experiences-container">
				<h1 className="experiences-title">{t("work-experiences-title")}</h1>
				<div className="experiences">
					{listOfExperiences.map((experience) => (
						<Experience
							key={experience.id}
							{...experience}
						></Experience>
					))}
				</div>
			</div>
		</div>
	);
}

export default Experiences;
