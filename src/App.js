import './App.css';
import Footer from './components/footer/footer.component';
import Projects from './sections/projects/projects.component';
import Skills from './sections/skills/skills.component';
import Work from './sections/work/work.component';

function App() {
  

  return (
    <div className="App">
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
