import "../CSS/About.css";
import { useState, useEffect } from "react";

function About() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div id="about-me" className="container-general-about">
			<div
				className={`container container-about-me box-about ${
					show ? "animate-about" : ""
				}`}
			>
				<div className="about">
					<h1 className="about-title">About me</h1>
					<p className="about-paragraph">
						I'm a <strong>web developer</strong> specialized in the
						<strong> JavaScript</strong> ecosystem. I love to craft
						<strong> high-quality software</strong> through
						<strong> clean code</strong> and
						<strong> best practices</strong>.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
