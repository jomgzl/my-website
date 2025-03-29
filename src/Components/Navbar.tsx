import "../CSS/Navbar.css";
import { useTranslation } from "react-i18next";

function Navbar() {
	const { t } = useTranslation();

	return (
		<nav className="navbar-section-1 titles">
			<a className="about-me" href="#about-me">
				{t("about-title")}
			</a>
			<a className="skills" href="#skills">
				{t("skills")}
			</a>
			<a className="projects" href="#projects">
				{t("projects-title")}
			</a>
			<a className="work-experiences" href="#work-experiences">
				{t("work-experiences-nav")}
			</a>
		</nav>
	);
}

export default Navbar;
