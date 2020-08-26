import React from 'react'
import {Link} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const styles = {
    backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://picsum.photos/1650/2400')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const bgPrimaryStyle = {
    backgroundColor: '#2c3e50',
    height: '30vh'
}



const Home = () => {
    return (
        <div style = {{backgroundColor: 'rgb(245, 250, 250)'}}>
            <div className = '' style = {styles}>
                <Container>
                    <Row className="justify-content-center align-items-center"  style = {{minHeight: '100vh'}}>
                        
                        <h1 className = 'text-white'>A platform for Parliamentarians to assist their policy advocacy efforts </h1>
                    </Row>
                </Container>
            </div>
            
            <div className = 'text-white' id = 'need' xs lg="5">
                <Container fluid>
                    <Row className = 'text-center justify-content-center align-items-center' style = {bgPrimaryStyle}>
                        <h3> Need </h3>
                        <p>Loral Ipsum  platform for Parliamentarians to assist their policy advocacyplatform for Parliamentarians to assist their policy advocacyplatform for Parliamentarians to assist their policy advocacy</p>
                    </Row>
                </Container>
            </div>
            

            <div className = '' id = 'HowPGAsWork'>
                <Container>
                    <Row className = 'bg-secondary' style = {{minHeight: '60vh'}}>
                        <h3> How do the PGAs work? </h3>
                    </Row>
                </Container>
            </div>

            <div className = '' id = 'HowPGAsWork'>
                <Container>
                    <Row className = 'bg-primary' style = {{minHeight: '60vh'}}>
                        <h3> Check out initiatives taken up by PGAs? </h3>
                    </Row>
                </Container>
            </div>

            <div className = '' id = 'HowPGAsWork'>
                <Container>
                    <Row className = 'bg-secondary' style = {{minHeight: '60vh'}}>
                        <h3> Testimonails</h3>
                    </Row>
                </Container>
            </div>


            <div className = '' id = 'HowPGAsWork'>
                <Container>
                    <Row className = 'bg-primary' style = {{minHeight: '60vh'}}>
                        <h3> Blogs and Events</h3>
                    </Row>
                </Container>
            </div>


            <div className = '' id = 'HowPGAsWork'>
                <Container>
                    <Row className = 'bg-secondary' style = {{minHeight: '15vh'}}>
                        <h3> Newsletter</h3>
                    </Row>
                </Container>
            </div>

        
            
            
            </div>
    )
}

export default Home
