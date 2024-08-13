import Styles from './App.module.css'
import { Intro } from './components/Navbar/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return( 
  <div className={Styles.App}>
    <Navbar/>
    <Intro/>
    </div>
);
}

export default App
