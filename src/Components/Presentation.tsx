import "../CSS/Presentation.css";
import { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Presentation() {
	const [show, setShow] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<div className="container-general-presentation">
			<LanguageSwitcher></LanguageSwitcher>
			<div
				className={`container container-presentation box-presentation ${
					show ? "animate-presentation" : ""
				}`}
			>
				<div className="presentation">
					<h1 className="full-name">Joseph Mogaizel</h1>
					<h1 className="role">
						<Trans i18nKey="role" />
					</h1>
					<div className="logos">
						<a href="https://www.linkedin.com/in/josephmogaizel/">
							<img
								className="linkedin-logo"
								src="linkedIn.png"
								alt="LinkedIn"
							/>
						</a>
						<a href="https://github.com/Jomgzl">
							<img
								className="github-logo"
								src="github.png"
								alt="GitHub"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Presentation;
