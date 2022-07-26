import './App.css';
import Home from './pages/Home';
// import Attractions from "../components/Attractions"
import MountainsInfo from './components/MountainsInfo';

import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Home />


      {/* <Navigation /> */}
      <Routes>
        {/* Adding a route to the Welcome component at the "/" path of the URL. We are also passing the value "Eric" to the "name" prop */}
        <Route path="/" element={<Home name="Eric" />} />


        {/* Adding a route to the Clock component here. Clock doesn't require any props. It manages everything with it's internal state */}
        <Route path="Mountains" element={<MountainsInfo />} />

        {/* Adding a route to the Contact component here. */}
       
      </Routes>

    </div>
  );
}

export default App;
