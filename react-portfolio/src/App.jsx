import Styles from './App.module.css';
import { About } from './components/About/About';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects'

function App() {
  return( 
  <div className={Styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    <Experience/>
    <Projects/>
    </div>
);
}

export default App
