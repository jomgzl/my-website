import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Presentation from "./Components/Presentation";
import About from "./Components/About";
import CardList from "./Components/CardList";
import Projects from "./Components/Projects";
import ProjectDetails from "./Components/ProjectDetails";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import listOfSkills from "./Data/skills.json";
import listOfProjects from "./Data/projects.json";
import listOfExperiences from "./Data/experiences.json";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Navbar></Navbar>
							<Presentation></Presentation>
							<About></About>
							<CardList listOfSkills={listOfSkills}></CardList>
							<Projects
								listOfProjects={listOfProjects}
							></Projects>
							<Experiences
								listOfExperiences={listOfExperiences}
							></Experiences>
							<Footer></Footer>
						</>
					}
				/>
				<Route
					path="/project/:projectId"
					element={<ProjectDetails />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
