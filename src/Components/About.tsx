import "../CSS/About.css";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";

function About() {
	const [show, setShow] = useState(false);
	const { t } = useTranslation();

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
					<h1 className="about-title">
						<Trans i18nKey="about-title" />
					</h1>
					<p className="about-paragraph">
						<Trans i18nKey="about" />
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
