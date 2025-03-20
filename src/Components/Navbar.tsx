import "../CSS/Navbar.css";

function Navbar() {
	return (
		<nav className="navbar-section-1 titles">
			<a className="about-me" href="#about-me">About Me</a>
			<a className="skills" href="#skills">Skills</a>
			<a className="projects" href="#projects">Projects</a>
			<a className="work-experiences" href="#work-experiences">Work Experiences</a>
		</nav>
	);
}

export default Navbar;
