import "../CSS/Project.css";

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

function Project({ title, logo, summary, technologies, onClick }: Props) {
	return (
		<div className="project-container" onClick={onClick}>
			<div>
				<img className="project-logo" src={logo} alt={title} />
			</div>
			<div className="project-presentation">
				<h3 className="project-title">{title}</h3>
				<p className="project-description">{summary}</p>
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
