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