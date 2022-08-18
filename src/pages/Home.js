import Attractions from "../components/Attractions"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import ParksTable from "../components/ParksTable"


function Home(props) {

    return (
        <div className="Home">
        <Header />
        {/* <ParksTable /> */}
        <Hero />
        <Attractions />
        <Footer />

        </div>

    )
}

export default Home