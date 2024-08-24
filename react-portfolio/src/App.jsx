import Styles from './App.module.css';
import { About } from './components/About/About';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return( 
  <div className={Styles.App}>
    <Navbar/>
    <Intro/>
    <About/>
    </div>
);
}

export default App
