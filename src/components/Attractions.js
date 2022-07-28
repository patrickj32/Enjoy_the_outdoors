
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'


function Attractions(props) {
    return (  
<div className="Attractions">


            <CardGroup bg="light" >
                <Card  tyle={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Mountains</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Go look at some fucking mountains</Card.Subtitle>
                        <Card.Text>
                            <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0e/a3/4d/ef.jpg"></img>
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Waterfalls</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Go look at some fucking waterfalls</Card.Subtitle>
                        <Card.Text>
                            <img className="waterFallPic" src='https://parktrust.org/wp-content/uploads/fly-images/6886/Untitled-design-28-640x360-c.png'></img>

                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>

                </Card>
                <Card  style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Trails</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Go walk some fucking trails</Card.Subtitle>
                        <Card.Text>
                            <img className="hickingPic" src="https://www.tripsavvy.com/thmb/udfIrUb_SPsALK5HbhXZ2UQlmEo=/735x0/man-on-early-morning-hike-up-mountainside-1056063244-06433cd9244c4ca38ec43d2782062ba1.jpg"></img>
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup></div>

    );
}

export default Attractions;