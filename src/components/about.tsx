import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Row, Col, Container } from 'react-bootstrap'
import uva_white from './imgs/uva_white.png'
import lca_white from './imgs/lca_white.png'
import snapback_white from './imgs/snapback_white.png'
import wahoops_white from './imgs/wahoops_white.png'
import raytheon_white from './imgs/raytheon_white.png'
import bluebackground_long from './imgs/bluebackground_long.png'

const about = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div style={{
            backgroundImage: `url(${bluebackground_long})`
        }}>
        <ScrollContainer>
        <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
            <h1 className = "helloThere" style={{ fontSize: "150px"}}>ABOUT ME</h1>

            </Animator>
        </ScrollPage>
        <ScrollPage>
            <Animator animation={FadeUp}>
            <Container fluid className="about-section">
                <br></br>
                <Row>
                    <Col>
                    <Animator animation={MoveIn(500, 0)}>
                    <h1 className = "white-header-text">WHERE I'M FROM</h1>
                    </Animator>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <h5 className="white-lefty-about-text">Email: kevinmoody16@gmail.com</h5>
                    </Col>
                    <Col md="6">
                        <a target="_blank" href="https://docs.google.com/document/d/1-bjEPHGM2DDe7p_ktWWE30FzpWEbmU0n/edit?usp=sharing&ouid=103753004454648013007&rtpof=true&sd=true">
                            <button className="resume-button">View my resume here:</button>
                        </a>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <p className="white-lefty-about-text">
                            I was born and raised in Billerica, Massachusetts, but I hardly spent any time there.
                            I spent most of my time growing up in Lexington, where I attended middle/high school at
                            Lexington Christian Academy. I had various jobs growing up, including Chick-fil-A dishwasher,
                            youth soccer referee, trampoline park monitor, christmas ornament business cashier, graphic
                            designer, and summer camp kitchen staff. I'm currently enrolled in the School of Engineering
                            and Applied Sciences at the University of Virginia, seeking a major in Computer Science and a
                            minor in Engineering Business. As a current Third-Year, I have two more years of school before
                            I'm propelled into the real world.
                        </p>
                    </Col>
                </Row>
            </Container>
            </Animator>
        </ScrollPage>
        <ScrollPage>
            {}
        </ScrollPage>
        <div style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/abstract-dark-black-papercut-geometric-background-modern-futuristic-vector-id1352152504?k=20&m=1352152504&s=612x612&w=0&h=lna8OVU2zm3sIUFH_qXItLVlXx3BofXvqjknP3ANiaw=)'}}>
        <ScrollPage>
            <Animator animation={FadeUp}>
                <Row>
                    <Col>
                        <img src={uva_white} width="200" height="200"></img>
                    </Col>
                    <Col>
                        <img src={lca_white} width="200" height="200"></img>
                    </Col>
                </Row>
            </Animator>
        </ScrollPage>
        </div>
        <ScrollPage>
            {}
        </ScrollPage>
        <ScrollPage>
            <Animator animation={FadeUp}>
            <Container fluid className="about-section">
                <br></br>
                <Row>
                    <Col md="11">
                    <Animator animation={MoveIn(-500, 0)}>
                    <h1 className = "white-header-text">WHAT I'VE DONE</h1>
                    </Animator>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <p className="white-lefty-about-text">
                            Using my experience with photoshop, I've landed several part-time jobs as a graphic designer.
                            One of which is working for Snapback Sports, a social media brand with over 2.2M total followers.
                            I also work as the Head of Graphic Design for @Wahoops_ on Instagram, a UVA sports-based page with
                            over 30K followers. 
                        </p>
                        <p className="white-lefty-about-text">
                            The past two summers, I've had the opportunity to work as an intern for Raytheon Technologies,
                            in their Digital Business Management Department.
                        </p>
                        <b></b>
                    </Col>
                </Row>
            </Container>
            </Animator>
        </ScrollPage>
        <ScrollPage>
            {}
        </ScrollPage>
        <div style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/abstract-dark-black-papercut-geometric-background-modern-futuristic-vector-id1352152504?k=20&m=1352152504&s=612x612&w=0&h=lna8OVU2zm3sIUFH_qXItLVlXx3BofXvqjknP3ANiaw=)'}}>
        <ScrollPage>
            <Animator animation={FadeUp}>
                <Row>
                    <Col>
                        <img src={snapback_white} width="200" height="200"></img>
                    </Col>
                    <Col>
                        <img src={wahoops_white} width="200" height="200"></img>
                    </Col>
                    <Col>
                        <img src={raytheon_white} width="200" height="200"></img>
                    </Col>
                </Row>
            </Animator>
        </ScrollPage>
        </div>
        <ScrollPage>
            {}
        </ScrollPage>
        <ScrollPage>
            <Animator animation={FadeUp}>
            <Container fluid className="about-section">
                <br></br>
                <Row>
                    <Col md="11">
                    <Animator animation={MoveIn(0, -500)}>
                    <h1 className = "white-header-text">WHERE I'M GOING</h1>
                    </Animator>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <p className="white-lefty-about-text">
                            Even though I'll be graduating in the "near" future, I'm still not sure what the future has in 
                            store for me. 
                        </p>
                        <b></b>
                    </Col>
                </Row>
            </Container>
            </Animator>
        </ScrollPage>
        </ScrollContainer>
        </div>
    )
}

export default about;