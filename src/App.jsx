import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;