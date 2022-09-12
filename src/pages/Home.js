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

    // Would like the  compass pic inn the tab

    // ********HOME PAGE********
    // - Add links to cards?


    // ********PARKS PAGE********
    // - Footer isnt positioned correctly (something is going on with the parks page that is making it do the wierd shit)

    //  ********STRETCH GOAL********
//     ****- Some, but not all National Parks, contain a "Visit" property that contains a URL to a page about the park.
// You can display the URL in a hyperlink(ex: tag) along with park details so the user can click on it and visit the park's page from your list. 
// Make sure to open the visited page in a different tab / window!

// ********MOUNTAINS PAGE********



    // ********FOOTER********

// - Footer image isnt quite right


// ********DONE********

// - Lists display on top of eachother. When one list displays, the others should disapear 
// - Do we NEED a search bar?
// - List displays at the bottom of page
//  Mountaininfo list displays images now
// - Waterfall pic is wrong size
// - Images dont generate for every selections. If an images doesnt exist, what do we do?









