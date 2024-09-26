import Styles from './App.module.css';
import { About } from './components/About/About';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact';

function App() {
  return( 
  <div className={Styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
);
}

export default App
