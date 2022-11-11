import './App.css';
import Footer from './components/footer/footer.component';
import About from './sections/about/about.component';
import Home from './sections/home/home.component';
import Navbar from './sections/navbar/navbar.component';
import Projects from './sections/projects/projects.component';
import Skills from './sections/skills/skills.component';
import Work from './sections/work/work.component';

function App() {
  

  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <div className="work-page">
        <Work />
      </div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
