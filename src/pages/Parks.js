
import Header from "../components/Header"
// import Button from 'react-bootstrap/Button'
import Footer from "../components/Footer"
import NParkPic from '../images/NationalPark.jpg'






function Parks() {

    return (
        <div className="NationalParkHero">
            <Header />
            <div className="  MountainsInfoText d-flex justify-content-top align-items-center flex-column margin-top: 8px">

 
                Parks 

                {/* <Button className="MountainsInfoBtn opacity-75 " variant="outline-secondary">Lets Go</Button> */}
                <input className="MountainsInfoSearchBar" type="text" placeholder="Search.."></input>



            </div>

            <Footer />

        </div>




    );
}

export default Parks;




