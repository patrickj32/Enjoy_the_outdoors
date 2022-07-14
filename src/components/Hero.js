
import { Button } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import MtnFigure from '../images/MtnFigure.png'
function Hero(prop) {


    return (
        <div className="Hero">
            <Figure className='Herofigure'>
                <Figure.Image
                    width={600}
                    height={600}
                    alt="Its an Mtn image"
                    src={MtnFigure}

                />
                <Figure.Caption className='HeroText' >
                    Go The Fuck Outside

                    <Button className="LetsGoBtn opacity-75 " variant="outline-secondary">Lets Go</Button>

                </Figure.Caption>

            </Figure>



        </div>


    )

}

export default Hero

// *****Find inspriation! Look at legit sites***