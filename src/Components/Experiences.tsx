import "../CSS/Experiences.css";
import Experience from "./Experience";

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
	return (
		<div className="container-general-experiences">
			<div className="container experiences-container">
				<h1 className="experiences-title">Work Experiences</h1>
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
