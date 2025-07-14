import { BrowserRouter } from "react-router-dom"
import NavBar from "../Components/NavBar"
import {Hero} from "../Components/Hero"
import {AboutMe } from "../Components/AboutMe"
import { Projects} from "../Components/Projects"
import { Experience } from "../Components/Experience"
import { Education } from "../Components/EducationAndCertifications"
import { Contact } from "../Components/ContactMe"

export const Header = () => {
  return (
   <div> {/* Or use <React.Fragment> or <> */}
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Education/>
      <Contact />
    </div>
  )
}
