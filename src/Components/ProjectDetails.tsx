// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../CSS/ProjectDetails.css";

function ProjectDetails() {
	// const { projectId } = useParams();
	const location = useLocation();
	const { title, logo, description, github } = { ...location.state };

	const keywords = [
		"code",
		"task",
		"app",
		"simple",
		"straightforward",
		"efficient.",
		"Node.js,",
		"Express.js",
		"MySQL2",
		"built",
		"scratch.",
		"build",
		"website",
		"scratch,",
		"represent",
		"showcase",
		"skills",
		"profile.",
		"React,",
		"Vite",
		"TypeScript.",
		"quest",
		"passion",
		"programming,",
		"password",
		"generator",
		"Python",
		"multiple",
		"generation",
		"options.",
	];

	const customizedDescription = description.split(" ").map((word: string) => {
		return (
			<span>
				{keywords.includes(word) ? <strong>{word}</strong> : word}{" "}
			</span>
		);
	});

	return (
		<div className="container-general-project-details">
			<div className="container container-project-details">
				<div className="project-details-header">
					<h1 className="project-details-title">{title}</h1>
					<img
						className="project-details-image"
						src={`/${logo}`}
						alt="Project Logo"
					/>
				</div>
				<p className="project-details-paragraph">
					{customizedDescription}
				</p>
				<button type="button" className="project-source-button">
					<a href={github}>{"</> Sources"}</a>
				</button>
			</div>
		</div>
	);
}

export default ProjectDetails;
