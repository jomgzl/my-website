import "../CSS/Projects.css";
import Project from "./Project";

interface Project {
	id: number;
	title: string;
	logo: string;
	summary: string;
	technologies: string[];
}

interface Props {
	listOfProjects: Project[];
}

function Projects({ listOfProjects }: Props) {
	return (
		<div className="container-general-projects">
			<div className="container projects-container">
				<h1 className="projects-title">Side Projects</h1>
				{listOfProjects.map((project) => (
					<Project key={project.id} {...project}></Project>
				))}
			</div>
		</div>
	);
}

export default Projects;
