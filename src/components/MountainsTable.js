import Header from "./Header";
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap'


function MountainsTable(props) {


    return (
        <div className="MountainsTable ">

            <Table striped bordered hover size="lg" variant="light"  >

                <thead>
                    <tr>
                        <th></th>

                        <th>Mountain Name</th>
                        <th>Elevation</th>
                        <th>Effort</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        // you used props here. 
                        props.MtnTableprop.map((mtn, i) => {

                            // ********
                            return (

                                <tr key={i}>
                                    <td><img className="Mtnjpegs" src={process.env.PUBLIC_URL + '/mountainImages/' + mtn.img}
                                        alt={mtn.name} /></td>


                                    <td>{mtn.name}</td>
                                    <td>{mtn.elevation}</td>
                                    <td>{mtn.effort}</td>
                                    <td>{mtn.desc}</td>


                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>


        </div>

    );
}

export default MountainsTable;