
import Header from "../components/Header"
// import Button from 'react-bootstrap/Button'
import Footer from "../components/Footer"
import NParkPic from '../images/NationalPark.jpg'
import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { getConfig } from "@testing-library/react"
import ParksTable from "../components/ParksTable"
import { useResolvedPath } from "react-router-dom"







function Parks() {


    let [locations, setLocations] = useState([]);
    let [filteredParkLocations, setFilteredParkLocations] = useState([]);
    let [type, setTypes] = useState([]);
    // let [filteredType, setFilteredType] = useState([]);
    let [allNationalParks, setAllNationalParks] = useState([]);
    let [showAllTable, setShowALLTable] = useState(false);




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
    // ********function for view all***********


    useEffect(() => {


        fetch("/data/nationalparks.json")
            .then((response) => response.json())
            .then((allNPData) => {

                setAllNationalParks(allNPData.parks)
                console.log((allNPData.parks))


            })
            .catch((error) => console.log(error))

    }, []);

    let handleShowFilteredParksByLocation = (event) => {

        let filteredShit = allNationalParks.filter((mypark) => {
            if (mypark.State === event.target.value) {
                console.log("true")
                return true

            }

        })
        console.log("clicked")
        // setShowAllTable(false)

        setFilteredParkLocations(filteredShit)

    }

    // ****Dropdowns and buttons*****
    let locationsDropdown = ""
    if (locations.length > 0) {
        let locationsListItems = locations.map((location, i) => {
            return <option key={i}>{location}</option>
        })


        locationsDropdown =

            <Form.Select onChange={handleShowFilteredParksByLocation} className="w-25">
                <option  value="">Select a location</option>
                {locationsListItems}

            </Form.Select>
        console.log("dropdown clicked")



    }



    let typeDropdown = ""
    if (type.length > 0) {
        let typeListItems = type.map((types, i) => {
            return <option key={i}>{types}</option>
        })

        typeDropdown =

            <Form.Select  onChange={searchTypeHandler} className="w-25">
                <option value="">Select a type</option>
                {typeListItems}

            </Form.Select>
    }


    let handleShowAllData = (event) => {

        setShowALLTable(true)

    }




    return (
        <div className="NationalParkHero">
            <Header />
            <div className="MountainsInfoText d-flex justify-content-top align-items-center flex-column margin-top: 8px">
                Parks
                <br></br>
                <div className="mb-2">
                    <Button onClick={handleShowAllData} variant="light" size="lg">View All</Button>
                </div>

                <Form.Select onChange={searchTypeHandler} className="w-25" aria-label="Default select example">
                    <option>Select park by</option>
                    <option  value="location">Location</option>
                    <option value="type">Type</option>
                </Form.Select>

                {locationsDropdown}
                {typeDropdown}





            </div>




            {/* <Footer /> */}
            {showAllTable &&
                 // you used props here
                <ParksTable ParkTableprop={allNationalParks} />
            }

            {filteredParkLocations.length > 0 &&
                <ParksTable ParkTableprop={filteredParkLocations} />
            }


        </div>


    )

}





export default Parks;


// 8/17/22

// Youre gonna have to filter the users in the next objective
// "filtered users"

// ex
//  let randomMethod = users.filter((user) =>{
//     if(user.username === "Bret"){
//         return true
//     }else{
//             false
//         }
//     }

//  8/23/22
// type flter method will use "contain"

