import "../CSS/Projects.css";
import Project from "./Project";
import { useNavigate } from "react-router-dom";

interface Project {
	id: number;
	title: string;
	logo: string;
	summary: string;
	description: string;
	technologies: string[];
	github: string;
}

interface Props {
	listOfProjects: Project[];
}

function Projects({ listOfProjects }: Props) {
	const navigate = useNavigate();

	const handleProjectClick = (project: Project) => {
		navigate(`/project/${project.id}`, { state: project });
	};

	return (
		<div id="projects" className="container-general-projects">
			<div className="container projects-container">
				<h1 className="projects-title">Side Projects</h1>
				{listOfProjects.map((project) => (
					<Project
						key={project.id}
						onClick={() => handleProjectClick(project)}
						{...project}
					></Project>
				))}
			</div>
		</div>
	);
}

export default Projects;
