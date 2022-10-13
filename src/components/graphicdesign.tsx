import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Row, Col, Container } from 'react-bootstrap'
import uva_white from './imgs/uva_white.png'
import lca_white from './imgs/lca_white.png'
import snapback_white from './imgs/snapback_white.png'
import wahoops_white from './imgs/wahoops_white.png'
import raytheon_white from './imgs/raytheon_white.png'
import bluebackground_long from './imgs/bluebackground_long.png'

const graphicdesign = () => {
    return(
        <div style={{
            backgroundImage: `url(${bluebackground_long})`
        }}>
        <h1 className='white-header-text' >Graphic Design</h1>
            <br></br><br></br><br></br><br></br>
        <h1 className='helloThere'> This page is currently<br></br> under development.</h1>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}

export default graphicdesign;