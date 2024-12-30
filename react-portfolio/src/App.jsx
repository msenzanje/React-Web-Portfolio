import Styles from './App.module.css';
import { About } from './components/About/About';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects'
import { Resume }   from './components/Resume/Resume';
import { Contact } from './components/Contact/Contact';

function App() {
  return( 
  <div className={Styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    <Experience/>
    <Projects/>
    <Resume/>
    <Contact/>
    </div>
);
}

export default App
