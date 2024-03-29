import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import FooterTree from '../images/FooterTree.png'







function Footer(props) {
    return (
        <div className="Footer">


            <CardGroup>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Follow Us on Social Media</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Text>
                            <i className="bi bi-facebook text-primary" style={{ fontSize: "26pt" }}></i>
                            <br></br>
                            <i className="bi bi-instagram text-danger" style={{ fontSize: "26pt" }}></i>
                            <br></br>
                            <i className="bi bi-twitter text-info " style={{ fontSize: "26pt" }}></i>
                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Contact Us</Card.Title>
                        <Card.Text>FAQ</Card.Text>
                        <Card.Subtitle className="mb-2 text light">Email:</Card.Subtitle>
                        <Card.Text>randomemail@gmail.com</Card.Text>
                        <Card.Subtitle className="mb-2 text light">Phone:</Card.Subtitle>
                        <Card.Text>555-5555</Card.Text>

                    </Card.Body>

                </Card>
                <Card bg="dark" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Text className='footerPic' >
                            <img src={FooterTree} width="60%"  />
                            <p>Go The F#### Outside 2022</p>

                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>
            </CardGroup>





        </div>
    );
}

export default Footer;