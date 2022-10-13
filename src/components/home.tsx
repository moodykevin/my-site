import { Container, Row, Col } from 'react-bootstrap'
import KM_Goodpic from './imgs/KM_Goodpic.jpg'
import uva_white from './imgs/uva_white.png'
import bluebackground_long from './imgs/bluebackground_long.png'
import { AiOutlineLinkedin, AiOutlineInstagram, } from "react-icons/ai"

const home = () => {
    return (
        <section style={{
            backgroundImage: `url(${bluebackground_long})`
        }}
        >
            <Container fluid className="home-container"  >
                <Container className="home-top"style={{ textAlign: "left" }}>
                    <Row>
                    <Col md={7} className="mainCard">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1 className="helloThere">Hey,<br></br>I'm Kevin Moody.</h1>
                            <br></br>
                            <br></br>
                            <h2 className="homeText">Computer Science student<br></br>at the University of Virginia</h2>
                        </Col>
                        <Col md={5} className="headshot">
                            <img src={KM_Goodpic} alt="" width="400" height="400"></img>
                        </Col>   
                    </Row>
                </Container>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <Container className="home-top"style={{ textAlign: "left" }}>
                    <Row>
                        <Col md={5} className="uva_white">
                            <br></br>
                            <br></br>
                            <img src={uva_white} alt="" className="uva_white"/>
                        </Col>
                        <Col md={7} className="mainCard">
                            <h2 className="homeText">I'm a Third-Year in the School of Engineering<br></br> and Applied Sciences.</h2>
                            <br></br><br></br>
                            <h4 className="homeText">
                                I built this website as a way to present my portfolio, as well as to improve my own programming ability.
                            </h4>
                            <br></br><br></br>
                            <h4 className="homeText">
                                I've worked in languages like Java, Python, C++, MATLAB, and Typescript, 
                                and have experience with technologies like Django and React. 
                            </h4>
                            <br></br><br></br>
                            <h4 className="homeText">
                                I also work as a part time graphic designer, you can view some of my work in the "Graphic Design" tab.
                            </h4>
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
                            <a href="https://www.linkedin.com/in/kevin-moody/" className="social-link"><AiOutlineLinkedin size={60}/></a>
                            <a href="https://www.instagram.com/kevinmood.y/" className="social-link"><AiOutlineInstagram size={60}/></a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default home;