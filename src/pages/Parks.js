
import Header from "../components/Header"
import Button from 'react-bootstrap/Button'
import Footer from "../components/Footer"
import MtnFigure from '../images/MtnFigure.png'






function Parks() {

    return (
        <div className="MountainsInfoHero">
            <Header />
            <div className=" MountainsInfoHero MountainsInfoText d-flex justify-content-top align-items-center flex-column margin-top: 8px">

 
                Parks

                {/* <Button className="MountainsInfoBtn opacity-75 " variant="outline-secondary">Lets Go</Button> */}
                <input className="MountainsInfoSearchBar" type="text" placeholder="Search.."></input>

            </div>


        </div>




    );
}

export default Parks;




// covert the Figure bullshit to divs!!! 7/27/2022