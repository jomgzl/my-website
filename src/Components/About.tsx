import "../CSS/About.css";
import { useState, useEffect } from "react";

function About() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div className="container-general-about">
			<div
				className={`container container-about-me box-about ${
					show ? "animate-about" : ""
				}`}
			>
				<div className="about">
					<h1 className="about-title">About me</h1>
					<p className="about-paragraph">
						I'm a web developer specialized in the JavaScript
						ecosystem. 👨‍💻 I love to craft high-quality software
						through meticulous testing and effective coding
						practices.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
