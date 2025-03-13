import "../CSS/Experience.css";

interface Props {
	id: number;
	title: string;
	date: string;
	logo: string;
	description: string;
	tasks: string[];
	skills: string[];
}

function Experience({ title, date, logo, description, tasks, skills }: Props) {
	return (
		<div className="experience-head">
			<div className="experience-information">
				<h4 className="experience-date">{date}</h4>
				<img src={logo} className="company-logo" alt="company" />
				<h4>{title}</h4>
			</div>
			<img src="down-arrow.svg" className="down-arrow" alt="down arrow" />
		</div>
	);
}

export default Experience;
