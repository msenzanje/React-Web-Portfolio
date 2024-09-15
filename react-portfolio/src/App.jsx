import Styles from './App.module.css';
import { About } from './components/About/About';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';

function App() {
  return( 
  <div className={Styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    <Experience/>
    </div>
);
}

export default App
