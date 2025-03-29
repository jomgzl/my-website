import "../CSS/Project.css";
import { useTranslation } from "react-i18next";

interface Props {
	id: number;
	title: string;
	logo: string;
	summary: string;
	description: string;
	technologies: string[];
	github: string;
	onClick: () => void;
}

function Project({id, logo, technologies, onClick }: Props) {
	const { t } = useTranslation();

	return (
		<div className="project-container" onClick={onClick}>
			<div>
				<img className="project-logo" src={logo} alt={t(`projects.${id}.title`)} />
			</div>
			<div className="project-presentation">
				<h3 className="project-title">{t(`projects.${id}.title`)}</h3>
				<p className="project-description">{t(`projects.${id}.summary`)}</p>
				<div className="project-technologies">
					{technologies.map((technology) => (
						<div key={technology} className="project-technology">
							{technology}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Project;
