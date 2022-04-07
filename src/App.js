import Home from "./Home/Home";
import About from "./About/About";
import Work from "./Work/Work";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Background from './Components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
