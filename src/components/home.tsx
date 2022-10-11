import { Container, Row, Col } from 'react-bootstrap'
import KM_Goodpic from './imgs/KM_Goodpic.jpg'
import uva_white from './imgs/uva_white.png'
import { AiOutlineLinkedin, AiOutlineInstagram, } from "react-icons/ai"

const home = () => {
    return (
        <section style={{
            backgroundImage: 'url(https://storage.needpix.com/rsynced_images/gradient-blue.jpg)'
        }}
        >
            <Container fluid className="home-container">
                <Container className="home-top">
                    <Row>
                        <Col md={5} className="headshot">
                            <img src={KM_Goodpic} width="400" height="400"></img>
                        </Col>
                        <Col md={7} className="mainCard">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1 className="helloThere">Hey, I'm Kevin Moody</h1>
                            <br></br>
                            <br></br>
                            <h2 className="bodyText">I'm a Computer Science Student at the University of Virginia</h2>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container fluid className="home-bottom">
                    <Row>
                        <Col md="6" className="home-desc">
                            <h2 className="bodyText">From back home in Massachusetts, I now go to school at the University of Virginia</h2>
                            <br></br>
                            <br></br>
                            <h3 className="bodyText">
                                I'm currently studying computer science at the University of Virginia.
                            </h3>
                            <br></br>
                            <h3 className="bodyText">
                                I've worked in languages like Java, Python, C++, MATLAB, and Typescript, 
                                and have experience with technologies like Django and React. 
                            </h3>
                            <br></br>
                            <h3 className="bodyText">
                                I also work as a part time graphic designer for Snapback Sports and Wahoops, you can view some of my work here.
                            </h3>
                        </Col>
                        <Col md="6" className="uva_white">
                            <br></br>
                            <br></br>
                            <img src={uva_white} className="uva_white"/>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container fluid className="contact-card">
                    <Row>
                        <Col md="12">
                            <h2 className="bodyText">
                                My Other Socials:
                            </h2>
                            <a target="_blank" href="https://www.linkedin.com/in/kevin-moody/" className="social-link"><AiOutlineLinkedin size={60}/></a>
                            <a target="_blank" href="https://www.instagram.com/kevinmood.y/" className="social-link"><AiOutlineInstagram size={60}/></a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default home;