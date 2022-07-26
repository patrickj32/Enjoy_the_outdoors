
import Header from "../components/Header"
import Form from "react-bootstrap/Form"
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'




function MountainsInfo() {

    return (
        <div className="MountainsInfoHero">
            <Header />
            <Figure>
                <Figure.Image className="MountainsInfoImage"
                    width={171}
                    height={180}
                    alt="171x180"
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>

                <Form className="d-flex ms-auto">
                    <Form.Control className="MountainSearchBar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </Form>

            </Figure>


        </div>



    );
}

export default MountainsInfo;