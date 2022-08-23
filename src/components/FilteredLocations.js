import Header from "./Header";
import { useState, useEffect } from 'react';
import ParksTable from "./ParksTable";

function FilteredLocations(props) {
    let [parks, setParks] = useState([])
    let [filteredParks, setFilteredParks] = useState([]);
    let [showAllTable, setShowAllTable] = useState(false);


    useEffect(() => {

        fetch("/data/nationalparks.json")
            .then((response) => response.json())
            .then((parksFromTheAPI) => {

                setParks(parksFromTheAPI.parks)
                console.log((parksFromTheAPI.parks))

            })
            .catch((err) => console.log(err))

    }, []);


    let handleShowAllData = (event) => {

        setShowAllTable(true)

    }

    



    return (
        <div className="FilteredLocations">

            hello
            <button onClick={handleShowAllData}>view all users</button>

            <button onClick={handleShowFilteredParkByLocation}>only show Alabama</button>

            {showAllTable &&
                <ParksTable ParkTableprop={park} />
            }

            {filteredPark.length > 0 &&
                <ParksTable ParkTableprop={filteredPark} />
            }

        </div>
    )

}

export default FilteredLocations;