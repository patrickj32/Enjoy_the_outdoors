import Attractions from "../components/Attractions"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"


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