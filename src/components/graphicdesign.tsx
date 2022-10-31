import { Row, Col, Container } from 'react-bootstrap'
import uva_color from './imgs/uva_color.png'
import snapback_color from './imgs/snapback_color.png'
import SB_rebrand from './imgs/SB-rebrand.png'
import wahoops_color from './imgs/wahoops_color.png'
import SB_portfolio from './imgs/SB_portfolio.png'
import SB_portfolio_glow from './imgs/SB_portfolio_glow.png'
import wahoops_portfolio from './imgs/wahoops_portfolio.png'
import wahoops_portfolio_glow from './imgs/wahoops_portfolio_glow.png'
import UVA_portfolio from './imgs/UVA_portfolio.png'
import UVA_portfolio_glow from './imgs/UVA_portfolio_glow.png'

import { AiFillYoutube, AiOutlineLink, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

import bluebackground_long from './imgs/bluebackground_long.png'

const graphicdesign = () => {
    return(
        <div style={{
            backgroundImage: `url(${bluebackground_long})`
        }}>
            <h1 className="helloThere">Graphic Design<br></br><br></br></h1>
            <Container fluid className="graphicdesign-container"style={{ textAlign: "left" }}>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={6} className="snapback">
                        <img src={snapback_color} alt="" width="300" height="300"></img>
                        <h1 className="helloThere">Snapback Sports</h1>
                        <h4 className="white">
                            Snapback Sports is a sports-based social media platform that is seeking to create
                            the next generation of sports fans. I was a follower of Snapback until about 3
                            years ago, when I got an opportunity to showcase my talent to the CEO, Jack Settleman.
                            I began working part-time in January of 2020. As the business has continued to grow
                            to a 7 figure revenue last year, my responsibilities have increased, to the point where
                            I'm now generating around 50 graphics per week. Snapback Sports continues to grow, hiring new
                            editors and talents. Most recently, I have been the leading the R&D of a new logo and branding.
                        </h4>
                        <a href="https://www.snapbacksports.com/" ><AiOutlineLink className="gh-link" size="50"/></a>
                        <a href="https://www.youtube.com/c/SnapBackSportsbyJack" ><AiFillYoutube className="gh-link" size="50"/></a>

                    </Col>
                    <Col className="mainCard">
                            <br></br><br></br><br></br><br></br><br></br>
                            <img src={SB_portfolio_glow} alt="" width="600" height="600"></img>
                    </Col>
                    
                </Row>
        </Container>
        <br></br><br></br><br></br><br></br>
        <Container fluid className="graphicdesign-section"style={{ textAlign: "left" }}>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={6} className="lacrosse">
                        <img src={uva_color} alt="" width="300" height="300"></img>
                        <h1 className="helloThere">UVA Athletics</h1>
                        <h4 className="white">
                            Last year, I was a volunteer manager for the Virginia Men's Lacrosse team.
                            Coming off of back-to-back national championships, I was eager to join
                            and contribute anything I was able to the program. Eventually, I began working
                            as a graphic designer for the team, creating multiple graphics and videos for
                            internal use, as well as for social media purposes. I began to work for the 
                            whole athletics department last spring and have focused mainly with Swim and Dive.
                        </h4>
                        <a href="https://virginiasports.com/sports/mlax/" ><AiOutlineLink className="gh-link" size="50"/></a>
                    </Col>
                    <Col className="mainCard">
                            <img src={UVA_portfolio_glow} alt="" width="600" height="600"></img>
                    </Col>
                </Row>
        </Container>
        <br></br><br></br><br></br><br></br>
        <Container fluid className="graphicdesign-section"style={{ textAlign: "left" }}>
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={6} className="wahoops">
                        <img src={wahoops_color} alt="" width="300" height="300"></img>
                        <h1 className="helloThere">Wahoops</h1>
                        <h4 className="white">
                            Before coming to UVA in the fall of 2020, I was excited to go to a school
                            that had such a big emphasis on extracurriculars. In the summer before my
                            first semester, I got connected with Gray Ellington, a UVA Alumni who had
                            dedicated the past 5 years to creating an Instagram account dedicated to
                            following Virginia Sports. The account initially started out following strictly
                            basketball, but has since expanded it's coverage to all sports. I was promoted
                            to the Head of Graphic Design in January 2022, where I manage a team of 6 graphic
                            design interns.
                        </h4>
                        <a href="https://www.instagram.com/wahoops_/?hl=en" ><AiOutlineInstagram className="gh-link" size="50"/></a>
                        <a href="https://twitter.com/wahoops_" ><AiOutlineTwitter className="gh-link" size="50"/></a>
                    </Col>
                    <Col className="mainCard">
                        <br></br>
                            <img src={wahoops_portfolio_glow} alt="" width="600" height="600"></img>
                    </Col>
                </Row>
        </Container>
        </div>
    
    )
}

export default graphicdesign;