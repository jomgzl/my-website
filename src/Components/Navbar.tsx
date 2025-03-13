import "../CSS/Navbar.css";

function Navbar() {
	return (
		<nav className="navbar-section-1 titles">
			<a className="about-me" href="#about-me">About Me</a>
			<a className="skills" href="#skills">Skills</a>
			<a className="projects" href="#projects">Projects</a>
		</nav>
	);
}

export default Navbar;
