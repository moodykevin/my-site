import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, StickyIn, ZoomIn, Sticky } from "react-scroll-motion";
import { Row, Col, Container } from 'react-bootstrap'
import uva_white from './imgs/uva_white.png'
import lca_white from './imgs/lca_white.png'
import bluebackground_long from './imgs/bluebackground_long.png'

const objective = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div style={{
            backgroundImage: `url(${bluebackground_long})`
        }}>
        <ScrollContainer>
        <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
            <h1 className = "helloThere" style={{ fontSize: "110px"}}>MY OBJECTIVE</h1>

            </Animator>
        </ScrollPage>
        <div>
        <ScrollPage>
            <Animator animation={FadeUp}>
                <Row>
                    <Col>
                        <img src={uva_white} alt="" width="200" height="200"></img>
                    </Col>
                    <Col>
                        <img src={lca_white} alt="" width="200" height="200"></img>
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
                    <h1 className = "white-header-text" style = {{fontSize:'80px'}}>STATEMENT:</h1>
                    </Animator>
                    </Col>
                </Row>
                <br></br><br></br><br></br><br></br>
                <Row>
                    <Col>
                        <h2 className ='objective-text' style={{color:'white', fontSize: '30px'}}>
                            Computer Science student at the University of Virginia, looking to devlop my programming
                            and professional skills. <br></br><br></br>Seeking a professional opportunity where I can contribute
                            to the organizational goals through my analytical skills and knowledge acquired through
                            my coursework. 
                        </h2>
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

export default objective;