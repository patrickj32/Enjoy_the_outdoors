
import Header from "../components/Header"
import Button from 'react-bootstrap/Button'
import Footer from "../components/Footer"
import MtnFigure from '../images/MtnFigure.png'
import { Dropdown, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import MountainsTable from "../components/MountainsTable"




function MountainsInfo() {

    let [mountains, setMountain] = useState([]);
    let [filteredMountains, setFilteredMountain] = useState([]);

    useEffect(() => {

        mountainsearchHandler()
    }, []);


    let mountainsearchHandler = (event) => {

        setMountain([])


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
        // }


    }   
    let handleFilteredMountains = (event) => {

        let filteredMtnShit = mountains.filter(filteredMtn => {
            if (filteredMtn.name === event.target.value) {
                console.log("true")
                return true

            }

        })
        console.log("clicked")
        // setShowAllTable(false)

        setFilteredMountain(filteredMtnShit)

    }


    

    let mountainsDropdown = ""
    if (mountains.length > 0) {
        let mountainsListItems = mountains.map((mountain,i) => {
          return <option key={i}>{mountain.name}</option>
        })
        

        mountainsDropdown =
            <Form.Select onChange={handleFilteredMountains} className="w-25" aria-label="Default select example">
                <option value="">Select a Mountain</option>
                {mountainsListItems}

            </Form.Select>

    }


    

        return (
            <div className="MountainsInfo" >
            <div className="MountainsInfoHero">
                <Header />
                <div className="MountainsInfoText d-flex justify-content-top align-items-center flex-column margin-top: 8px">


                    Mountains
                     {mountainsDropdown}

                      </div>
                    <div className="container">
                    {
                        // you used props here. 
                        filteredMountains.length > 0 &&
                        <MountainsTable  MtnTableprop={filteredMountains} />

                    }
                    </div>
                    


               
                
              

                
                
            </div>
            <Footer />
            </div>
            
            




        );
    
}

    export default MountainsInfo;






