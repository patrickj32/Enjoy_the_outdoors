import { ButtonToolbar } from "react-bootstrap"
import Attractions from "../components/Attractions"
import FilteredLocations from "../components/FilteredLocations"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ParksTable from "../components/ParksTable"


function Home(props) {

    return (
        <div className="Home">
            <Header />
            <Hero />
            <Attractions />
            <Footer />

        </div>

    )
}

export default Home

// Bugs and fixes....

// ********HOME PAGE********
// - Waterfall pic is wrong size
// - Add links to cards?


// ********PARKS PAGE********
// - Footer isnt positioned correctly (something is going on with the parks page that is making it do the wierd shit)

// ********MOUNTAINS PAGE********
// - Page is slightly cramped. We want images
// - List displays at the bottom of page



// ********DONE********

// - Lists display on top of eachother. When one list displays, the others should disapear 
// - Do we NEED a search bar?










