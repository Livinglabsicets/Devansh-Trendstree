import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Screen1 from './components/Screen1/Screen1';
import Screen2 from './components/Screen2/Screen2';
import Screen3 from './components/Screen3/Screen3';
import Screen4 from './components/Screen4/Screen4';
import ProgressBar from './components/Progressbar/ProgressBar';
// import Screen5 from './components/Screen5/';

function App() {
  // const strings = ["Open Banking", "Risk And Compliance", "Customer Insights", "Digital Banking", "Digital Customer Experience"];
 const strings = ["Open Banking", "Risk And Compliance", "Customer Insights"];
  return (
    <div className="App">
    
      <Router>
      
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/industry" element={<Screen2 />} />
          {/* <Route path="/theme" element={<Screen3 strings={strings} />} /> */}
          {/* <Route path="/trend/:name" element={<Screen4 />} /> */}
          <Route path="/theme" element={<Screen3 />} />
          <Route path="/Screen4" element={<Screen4 />} />
          

        </Routes>
        <div className='progressbars'>
        <ProgressBar/>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
