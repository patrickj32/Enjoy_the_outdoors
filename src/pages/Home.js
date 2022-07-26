import Attractions from "../components/Attractions"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import MountainsInfo from "../components/MountainsInfo"


function Home(props) {

    return (
        <div className="Home">
        <Header />
        <Hero />
        <Attractions />
        <MountainsInfo />
        <Footer />

        </div>

    )
}

export default Home