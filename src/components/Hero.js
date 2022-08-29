
import { Button } from 'react-bootstrap'
import MtnFigure from '../images/MtnFigure.png'
function Hero(prop) {


    return (
        <div className="Hero">
            <div className="Hero HeroText d-flex justify-content-center align-items-center flex-column margin-top: 25px">

                <img src={MtnFigure} width="30%" />
                Go The F### Outside

                <Button className="LetsGoBtn opacity-75 " variant="outline-secondary">Lets Go</Button>






            </div>



        </div>


    )

}

export default Hero

