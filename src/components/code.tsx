import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { ImCalendar } from 'react-icons/im';
import { BsBraces } from 'react-icons/bs';
import { BsWindow } from 'react-icons/bs';
import { FiCpu } from 'react-icons/fi';
import bluebackground_long from './imgs/bluebackground_long.png';


const code = () => {


    return (
        <section style={{
            backgroundImage: `url(${bluebackground_long})`
        }}
        >
            <Container fluid className="code-container">
                <Container fluid className="code-section">
                    <h1 className="helloThere">My Projects<br></br><br></br></h1>
                    <Container className="projects">
                        <Row>
                            <Col md="5">
                                <BsWindow size="250" color="white"/><br></br><br></br>
                                <h1 className="white">This Site</h1>

                                <h5 className="white">
                                    This website was built in the fall of 2022. As a self-guided
                                    project, I learned how to construct this site through a number of
                                    tutorials as well as assistance from more experienced developers (Hi Will).
                                    It's an introduction to TypeScript, React, and website devlopment as a whole.
                                </h5>
                                <a target="_blank" href="https://github.com/moodykevin/my-site" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                            <Col md="2"></Col>
                            <Col md="5">
                                <ImCalendar size="240" color="white"/><br></br><br></br>
                                <h1 className="white">Course Scheduling</h1>
                                <h5 className="white">
                                    As a final project for my Software Engineering course, my team and I
                                    are building a website to replace a former course scheduling site that
                                    will no longer be running this fall. Built in Python/HTML, this project uses
                                    Django as an introduction to frameworks and software architectural patterns,
                                    and is deployed through Heroku.
                                </h5>
                                <a target="_blank" href="https://github.com/moodykevin/" ><AiFillGithub className="gh-link" size="50"/></a>
                                <a target="_blank" href="https://newlouslist-a-26.herokuapp.com/" ><AiOutlineLink className="gh-link" size="50"/></a>

                            </Col>
                        </Row>
                        <br></br><br></br><br></br>
                        <Row>
                            <Col md="5">
                                <FiCpu size="250" color="white" /><br></br><br></br>
                                <h1 className="white">Simple Computer</h1>
                                <h5 className="white">
                                    The capstone project in my Digital Logic Design course was to design,
                                    develop, and implement a simple PC using a digital logic simulator. It was
                                    composed of a data path, opcode decoder, CPU, ALU, registers, and more. The
                                    computer was able to write and run programs using simplified machine language.
                                </h5>
                                <a target="_blank" href="https://github.com/moodykevin/" ><AiFillGithub className="gh-link" size="50"/></a>
                            </Col>
                            <Col md="2"></Col>
                            <Col md="5">
                                <BsBraces size="250" color="white"/><br></br><br></br>
                                
                                <h1 className="white">Data Representation</h1>
                                <h5 className="white">
                                    This code was written in my Program and Data Representation Course. This
                                    class introduces how programs and data are represented and stored at the
                                    machine level. We studied arrays, records, recursion, hashing, stakcs, queues,
                                    trees, graphs, and more. During the semester, we learned x86 and even wrote snippets
                                    of machine code through an online simulator.
                                </h5>
                                <a target="_blank" href="https://github.com/moodykevin/" ><AiFillGithub className="gh-link" size="50"/></a>

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        </section>
    )
}

export default code;