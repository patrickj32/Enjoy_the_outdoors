import Header from "./Header";
import { useState, useEffect } from 'react';
import ParksTable from "./ParksTable";

function FilteredLocations(props) {
    let [locations, setLocations] = useState([])
    let [filteredLocation, setFilteredLocations] = useState([]);
    let [showAllTable, setShowAllTable] = useState(false);


    useEffect(() => {

        fetch("/data/nationalparks.json")
            .then((response) => response.json())
            .then((locationsFromTheAPI) => {

                setLocations(locationsFromTheAPI.parks)
                console.log((locationsFromTheAPI.parks))

            })
            .catch((err) => console.log(err))

    }, []);


    let handleShowAllData = (event) => {

        setShowAllTable(true)

    }

    let handleShowAlabama = (event) => {

        let showAlabama = locations.filter((park) => {
            if (park.State === 'Alabama') {
                console.log("true")
                return true

            } else {
                return false
                console.log("false")
            }
        })
        console.log("clicked")
        setFilteredLocations(showAlabama)

    }



    return (
        <div className="FilteredLocations">

            hello
            <button onClick={handleShowAllData}>view all users</button>

            <button onClick={handleShowAlabama}>only show Alabama</button>

            {showAllTable &&
                <ParksTable ParkTableprop={locations} />
            }

            {filteredLocation.length > 0 &&
                <ParksTable ParkTableprop={filteredLocation} />
            }

        </div>
    )

}

export default FilteredLocations;