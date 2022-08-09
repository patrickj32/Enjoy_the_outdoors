
import Header from "../components/Header"
import Button from 'react-bootstrap/Button'
import Footer from "../components/Footer"
import MtnFigure from '../images/MtnFigure.png'
import { Form } from 'react-bootstrap'







function MountainsInfo() {

    return (
        <div className="MountainsInfoHero">
            <Header />
            <div className=" MountainsInfoHero MountainsInfoText d-flex justify-content-top align-items-center flex-column margin-top: 8px">


                Mountains

                {/* <Button className="MountainsInfoBtn opacity-75 " variant="outline-secondary">Lets Go</Button> */}
                {/* <input className="MountainsInfoSearchBar" type="text" placeholder="Search.."></input> */}
                <Form.Select className="w-25" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>


            </div>

            <Footer />
        </div>




    );
}

export default MountainsInfo;




// covert the Figure bullshit to divs!!! 7/27/2022