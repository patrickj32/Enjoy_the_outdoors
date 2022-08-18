import Header from "../components/Header";
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'


function ParksTable(props) {


    return (
        <div className="ParksTable">

                <Table striped bordered hover size="sm" variant="light" >

                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Location ID</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            // you used props here. 
                            props.turds.map((park, i) => {

                                // ********
                                return (
                                    <tr key={i}>
                                        <td>{park.LocationName}</td>
                                        <td>{park.Address}</td>
                                        <td>{park.City}</td>
                                        <td>{park.LocationID}</td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>


        </div>

    );
}

export default ParksTable;