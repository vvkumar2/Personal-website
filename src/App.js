import './App.css';
import WorkBox from './components/work-box/work-box.component';

import Projects from './sections/projects/projects.component';

function App() {
  const bullet_work1 = ["Preventing server data loss at Intel’s Austin, Jones Farm, and Hudson sites using Veeam Backup and Replication software (VBR).",
      "Built an internal website with Python (Flask), JavaScript, and SQL to consolidate over 200,000 datapoints into a concise web page – adopted company-wide and in use today.",
      "Executed queries from Python to read and write a MySQL database to allow for improved website functionality such as filtering, searching, and editing data.",
      "Maintained long-term retention archives for past processors using Intel’s START programming language on the command line."

  ]

  return (
    <div className="App">
      <WorkBox name="Intel Corporation" location="Santa Clara, CA" year="April 2022 - Present" position="Software Engineering Intern" desc={bullet_work1}/>
      <Projects />
    </div>
  );
}

export default App;
