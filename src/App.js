import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Questions } from "./components/Questions";
import { Game } from "./components/Game";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import Earth from "./components/Earth";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Earth />
      <Skills />
      <Projects />
      <Questions />
      <Game />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
