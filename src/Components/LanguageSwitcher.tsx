import "../CSS/LanguageSwitcher.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language);
	};

	const [enIsClicked, setEnIsClicked] = useState(false);
	const [frIsClicked, setFrIsClicked] = useState(false);

	return (
		<div className="language-switcher">
			<button
				className={`language-buttons ${
					enIsClicked && !frIsClicked ? "language-button-clicked" : ""
				}`}
				onClick={() => {
					changeLanguage("en");
					setEnIsClicked(true);
					setFrIsClicked(false);
				}}
			>
				EN
			</button>
			<button
				className={`language-buttons ${
					frIsClicked ? "language-button-clicked" : ""
				}`}
				onClick={() => {
					changeLanguage("fr");
					setFrIsClicked(true);
					setEnIsClicked(false);
				}}
			>
				FR
			</button>
		</div>
	);
};

export default LanguageSwitcher;
