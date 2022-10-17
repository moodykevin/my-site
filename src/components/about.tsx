import bluebackground_long from './imgs/bluebackground_long.png'
import { Row, Col, Container } from 'react-bootstrap'
import KM_Wilson from './imgs/KM_Wilson.png'
import KM_Family from './imgs/KM_Family.png'
import KM_Will from './imgs/KM_Will.png'


const about = () => {
    return (<section
        style={{
            backgroundImage: `url(${bluebackground_long})`
        }}>
        <Container fluid className="about-container">
            <Container fluid className="about-section">
                <h1 className="helloThere">About</h1>
                <br></br>
                <Row>
                    <Col md="6">
                        <h5 className="white">Email: kevinmoody16@gmail.com</h5>
                    </Col>
                    <Col md="6">
                        <a target="_blank" href="https://docs.google.com/document/d/1-bjEPHGM2DDe7p_ktWWE30FzpWEbmU0n/edit?usp=sharing">
                            <button className="resume-button">View my resume here</button>
                        </a>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="8">
                        <h1 className="white">About me:</h1>
                        <p className="white about-text"><i>Sometimes, you gotta go back to actually move forward.</i> -Matthew McConaughey</p>
                        <p className="white lefty about-text">
                            I grew up in Billerica, Massachusetts and graduated from Lexington Christian Academy
                            in the spring of 2020. Now, I split my time between Billerica and Charlottesville VA,
                            where the University of Virginia is located. I'm studying Computer Science in the
                            School of Engineering and Applied Sciences, and I'm seeking to pick up a minor in
                            Engineering Business before I graduate.
                        </p>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={KM_Family} width="350" height="350"></img>
                            <figcaption className="white caption">A picture of my family at a recent wedding</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <br></br>
                        <figure>
                            <img src={KM_Will} width="350" height="350"></img>
                            <figcaption className="white caption">A picture with fellow overachiever, Will Redding</figcaption>
                        </figure>
                    </Col>
                    <Col md="8">
                        <h1 className="white">My Life:</h1>
                        <p className="white lefty about-text">
                            I spend my summers splitting my time between MA and Swanzey NH, where my family spends
                            up to two months at a christian-affiliated family camp. In fact, I worked in the kitchen
                            at the camp during summer of 2019. I'm a huge sports fan, and grew up watching Tom Brady
                            and the Patriots every sunday in the fall. This love for sports of mine has grown, into
                            the point now where I work part-time for several sports companies. Other than than, I'm often
                            playing pickleball, Xbox, and participating in trivia at a local bar.
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="8">
                        <h1 className="white">Development:</h1>
                        <p className="white lefty about-text">
                            I learned the basics of how to code through Khan Academy when I was in middle school. However,
                            I moved into college with the intention of studying Mechanical or Aerospace Engineering. In the spring
                            semester of my First-year when it came time to declare a major, I was taking Intro to CS and MultiVar Calc
                            at the same time, and realized that I liked coding a lot more than calculus. I declared officially as
                            a computer science major, and began taking CS classes that fall. While at UVA, I've been 
                            learning Python, Java, C++, and MATLAB through my math courses. During this time 
                            I've interned at Raytheon Technologies for two consecutive summers as an Digital Business Managmenet intern, 
                            further honing my skills in the Microsoft Office suite, with a focus on Sharepoint and Excel. 
                        </p>
                    </Col>
                    <Col md="4">
                        <figure>
                            <img src={KM_Wilson} width="350" height="355"></img>
                            <figcaption className="white caption">A picture with some of my best friends from UVA</figcaption>
                        </figure>
                    </Col>
                </Row>
                
            </Container>

        </Container>
    </section>
    )
}

export default about;