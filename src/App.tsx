import NavBar from "./components/Navigation/NavBar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
