import './App.css';
import Home from './pages/Home';
// import Attractions from "../components/Attractions"
import MountainsInfo from './pages/MountainsInfo';
import Parks from './pages/Parks';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mountains" element={<MountainsInfo />} />
        <Route path="parks" element={<Parks />} />
        



      </Routes>

    </div>
  );
}

export default App;
