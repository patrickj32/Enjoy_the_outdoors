
import Header from "../components/Header"
import Button from 'react-bootstrap/Button'
import Footer from "../components/Footer"
import MtnFigure from '../images/MtnFigure.png'
import { Dropdown, Form } from 'react-bootstrap'
import { useState } from 'react'



function MountainsInfo() {

    let [mountains, setMountain] = useState([]);

    let mountainsearchHandler = (event) => {

        setMountain([])

        if (event.target.value === "pickamountain") {

        fetch(`/data/mountains.json`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            //on success of the fetch request, turn the response that came back into JSON
            .then((response) => response.json())
            //on success of turnig the response into JSON (data we can work with), lets add that data to state
            .then((mountainData) => {

                //put the data in the console just so we can see it
                setMountain(mountainData.mountains)
                console.log((mountainData.mountains))


            })
            //handle any errors/failures with getting data from the API
            .catch((error) => {
                console.log(error)
            });
        }
    }   
    

    let mountainsDropdown = ""
    if (mountains.length > 0) {
        let mountainsListItems = mountains.map((mountain,i) => {
          return <option key={i}>{mountain.name}</option>
        })
        

        mountainsDropdown =
            <Form.Select onChange={mountainsearchHandler} className="w-25" aria-label="Default select example">
                <option value="">Pick one</option>
                {mountainsListItems}

            </Form.Select>

    }
    

        return (
            <div className="MountainsInfoHero">
                <Header />
                <div className=" MountainsInfoHero MountainsInfoText d-flex justify-content-top align-items-center flex-column margin-top: 8px">


                    Mountains

                    

                        <Form.Select onClick={mountainsearchHandler} className="w-25" aria-label="Default select example">
                        <option value="pickamountain">Select a Mountain</option>
                        </Form.Select>
                    {mountainsDropdown}


                </div>

                <Footer />
            </div>




        );
    
}

    export default MountainsInfo;




// 08/11/2022

