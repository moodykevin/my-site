import { Navbar, Nav } from 'react-bootstrap'
import { AiFillCode } from 'react-icons/ai'
import { SiAdobephotoshop } from 'react-icons/si'
import { HiAnnotation } from 'react-icons/hi'
import { ImHome } from 'react-icons/im'
import { BsFillBookmarkFill } from 'react-icons/bs'
import "./styles.css"

const Banner = () => {
    return (
        <div className="banner">
            <Navbar className='colorBanner' expand="md" variant="dark" id="banner" style={{ padding: "0px" }} >
                <Navbar.Brand href="/" >
                </Navbar.Brand>
                <Navbar.Brand href="/" className="justify-content-center, titleText">
                    <h1>Kevin Moody</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" style={{ padding: "15px" }}>
                    <Nav>
                        <Nav.Link className="banner-link" href="/">
                            <ImHome size="25"/> Home    
                        </Nav.Link>
                        " "
                        <Nav.Link className="banner-link" href="/about">
                            <HiAnnotation size="25"/> About
                        </Nav.Link>
                        " "
                        <Nav.Link className="banner-link" href="/code">
                            <AiFillCode size="25"/> Code  
                        </Nav.Link>
                        " "
                        <Nav.Link className="banner-link" href="/graphicdesign">
                            <SiAdobephotoshop size="25"/> Graphic Design  
                        </Nav.Link>
                        " "
                        <Nav.Link className="banner-link" href="/objective">
                            <BsFillBookmarkFill size="25"/> Objective
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Banner;