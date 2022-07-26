//import Link from react-dom-router
import { Link } from "react-router-dom";
import Attractions from "../components/Attractions"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import MountainsInfo from "../components/MountainsInfo"

function Navigation(props) {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/clock">Clock</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}

// export default Navigation;