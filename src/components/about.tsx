import './styles.css'
import { Row, Col, Container } from 'react-bootstrap'
import uva_white from './imgs/uva_white.png'

const about = () => {
    return (
        <div style={{
            backgroundImage: 'url(https://storage.needpix.com/rsynced_images/gradient-blue.jpg)'
        }}
        >
        <Container fluid className="about-section">
                <h1 className="white pagetitle">About Me</h1>
                <br></br>
                <Row>
                    <Col md="6">
                        <h5 className="white">Email: willredding3.14@gmail.com</h5>
                    </Col>
                    <Col md="6">
                        <a target="_blank" href="https://docs.google.com/document/d/1iagHpEUMfY2uUtpRQC8BhaL9gwZPTP4lxMMsyzwSNjI/edit?usp=sharing">
                            <button className="resume-button">Check out my resume!</button>
                        </a>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="8">
                        <h1 className="white"><u>Synopsis:</u></h1>
                        <p className="white about-text"><i>Nothing has changed, he is the same.</i> -Jon Bellion</p>
                        <p className="white lefty about-text">
                            Let's make it a whole biography, and start at the beginning. I was born, raised, and 
                            still primarily reside in North Attleboro, Massachusetts. I graduated from North Attleboro
                            High School (top 10 in my class, class president), all the while beginning my explorations
                            in software. From here I moved to Northeastern University in Boston, where I continue to 
                            study Computer Science at Khoury College, picking up some internships along the way.
                            As of now, I've got two more years left at Northeastern, with one co-op baked in, before 
                            I head into the great unknown. 
                        </p>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={uva_white} width="300" height="300"></img>
                            <figcaption className="white caption">Perhaps the best photo of me ever taken</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <br></br>
                        <figure>
                            <img src={uva_white} width="300" height="300"></img>
                            <figcaption className="white caption">Me and international celebrity Kevin Moody</figcaption>
                        </figure>
                    </Col>
                    <Col md="8">
                        <h1 className="white"><u>Code:</u></h1>
                        <p className="white lefty about-text">
                            Beginning my code explorations in early high school, I moved into college with a functional 
                            knowledge of Java, Javascript, and HTML/CSS. While at Northeastern, I've been 
                            spending more time with Python and Java while picking up languages like C. During this time 
                            I've interned at two companies, Orchard Therapeutics as an Automation Engineer and RECUR as a 
                            DevOps Engineer, picking up Go, AWS, and some Github skills. During my semesters, 
                            I've also worked as a TA for Fundementals of CS, and been a part of Oasis Development Club, joining
                            teams to build a for-fun software project.   
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="8">
                        <h1 className="white"><u>My Life:</u></h1>
                        <p className="white lefty about-text">
                            As pictured on this page, I often spend my time in Swanzey NH, where I've got 
                            several wonderful friends and a church-affiliated family camp where I would spend 
                            my summers before working at the camp. When I'm not spending time 
                            up here, I'm often playing tennis, ultimate frisbee, and doing trivia. I also obviously 
                            love D&D, and have been working on a homebrew campaign and other creations. I won't 
                            elaborate much on that, you can check out the 'D&D' tab for that! 
                            
                        </p>
                    </Col>
                    <Col md="4">
                        <figure>
                            <img src={uva_white} width="300" height="300"></img>
                            <figcaption className="white caption">Me with two people, both named Abby</figcaption>
                        </figure>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default about;