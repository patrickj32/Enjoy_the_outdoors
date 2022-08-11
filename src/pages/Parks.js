
import Header from "../components/Header"
// import Button from 'react-bootstrap/Button'
import Footer from "../components/Footer"
import NParkPic from '../images/NationalPark.jpg'
import { Form } from 'react-bootstrap'
import { useState } from 'react'






function Parks() {


    let [locations, setLocations] = useState([]);
    let [type, setTypes] = useState([]);


    let searchTypeHandler = (event) => {

        setLocations([])
        setTypes([])



        if (event.target.value === "location") {


            fetch(`/data/locations.json`,
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
                .then((locationData) => {

                    //put the data in the console just so we can see it
                    setLocations(locationData)
                    console.log((locationData))


                })
                //handle any errors/failures with getting data from the API
                .catch((error) => {
                    console.log(error)
                });

        }




        if (event.target.value === "type") {


            fetch(`/data/parktypes.json`,
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
                .then((typeData) => {

                    //put the data in the console just so we can see it
                    setTypes(typeData)
                    console.log((typeData))



                })
                //handle any errors/failures with getting data from the API
                .catch((error) => {
                    console.log(error)
                });

        }




    }

    let locationsDropdown = ""
    if (locations.length > 0) {
        let locationsListItems = locations.map((location,i) => {
            return <option key={i}>{location}</option>
        })

       locationsDropdown =

            <Form.Select onChange={searchTypeHandler} className="w-25">
                <option value="">Pick Something</option>
                {locationsListItems}

            </Form.Select>

    }

        let typeDropdown = ""
        if (type.length > 0) {
            let typeListItems = type.map((types, i) => {
                return <option key={i}>{types}</option>
            })

            typeDropdown =

                <Form.Select onChange={searchTypeHandler} className="w-25">
                    <option value="">Pick Something</option>
                    {typeListItems}

                </Form.Select>
        }
    

    return (
        <div className="NationalParkHero">
            <Header />
            <div className="MountainsInfoText d-flex justify-content-top align-items-center flex-column margin-top: 8px">


                Parks

                <Form.Select onChange={searchTypeHandler} className="w-25" aria-label="Default select example">
                    <option>Select park by</option>
                    <option value="location">Location</option>
                    <option value="type">Type</option>
                </Form.Select>

                {locationsDropdown}
                {typeDropdown}



            </div>

            {/* <Footer /> */}

        </div>




    );
}


export default Parks;


// 8/08/22
// Lets get the new drop down items working with a selection
// use proect exapmples as reference.

// make the problems BITE sized



