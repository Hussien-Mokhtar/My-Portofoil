import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import hussien from "../IMG/Hussien.jpeg"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { GiClick } from "react-icons/gi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import yellow from "../IMG/yellow.png"
import shose from "../IMG/shose.png"
import gym from "../IMG/upright-img.png"
import ecommers from "../IMG/ecommers.png"
import skander from "../IMG/skander.png"
import login from "../IMG/login.png"


export default function Navbarr() {


    return (
        <>
            <Navbar style={{ backgroundColor: "dodgerblue" }} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><div className="up-left">Hussien Mokhtar</div></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/"><h5>Home</h5></Nav.Link>
                        <Nav.Link href="/"><h5>Projects</h5></Nav.Link>
                        <Nav.Link href="/skills"><h5>Skills</h5></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <div className="card" style={{ border: "none" }}>
                <Card style={{ width: '18rem', border: "none" }} >
                    <Card.Img src={hussien} className='rounded-circle' style={{ width: "50%", height: "70%" }} />
                    <Card.Body>

                        <Card.Title> <h5 className="hussien-name">Hussien Mokhtar</h5> </Card.Title>
                        <Card.Text>
                            <p className='hussien-jop'>Front-end Developer</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>

                        <div className="icon">
                            <Card.Link href="https://www.instagram.com/heseenmokhtar?igsh=ZjNybXUzcDh3em9k"><FaInstagram className='icons insta' /> </Card.Link>

                            <Card.Link href="https://www.linkedin.com/in/heseen-mokhtar-1b7b072a6/"> <FaLinkedin className='icons in' /></Card.Link>


                            <Card.Link href="https://wa.me/qr/OL5K3RPXUKXRD1"> <FaWhatsapp className='icons whats' /></Card.Link>

                            <Card.Link href="https://github.com/Hussien-Mokhtar"> <FaGithub className='icons git' /></Card.Link>



                        </div>

                    </Card.Body>
                </Card>


                <div className="btn">
                    <Button variant="primary"><Link to="file:///C:/Users/HP/Downloads/MY%20CV.pdf">
                        <h1 >MY CV <GiClick className='click' /></h1></Link></Button>
                </div>
                <div className="btn-2">
                    <button> <Link to="/"><h2>Projects</h2></Link> </button>
                    <button> <Link to="/skills"><h2>Skills</h2></Link> </button>
                </div>

                <section>
                    <Container>

                        <Row >
                            <Col><div className="cards">
                                <Card style={{ width: '18rem', height: "15rem" }}>
                                    <Link to="https://blog-final-project-three.vercel.app/"><Card.Img src={yellow} /></Link>
                                    <Card.Body>
                                        <Card.Title> <h3 className='title'>• Blog Project</h3> </Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            </Col>


                            <Col>
                                <Col>
                                    <div className="cards">
                                        <Card style={{ width: '18rem', height: "15rem" }}>

                                            <Link to="https://it-shark-proj.vercel.app/"><Card.Img src={shose} style={{ height: "11rem" }} /></Link>
                                            <Card.Body>
                                                <Card.Title><h3 className='title'>• Shose Project</h3></Card.Title>
                                                <Card.Text>

                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Col>


                        </Row>
                    </Container>

                    <Container>

                        <Row >
                            <Col><div className="cards">
                                <Card style={{ width: '18rem', height: "15rem" }}>
                                    <Link to="https://gym-project-rho.vercel.app/"><Card.Img src={gym} /></Link>
                                    <Card.Body>
                                        <Card.Title> <h3 className='title'>• GYM Project</h3> </Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            </Col>

                            <Col>
                                <Col>
                                    <div className="cards">
                                        <Card style={{ width: '18rem', height: "15rem" }}>

                                            <Link to="https://ecommers-clothes-project.vercel.app/"><Card.Img src={ecommers} style={{ height: "11rem" }} /></Link>
                                            <Card.Body>
                                                <Card.Title><h3 className='title'>• Ecommers Project</h3></Card.Title>
                                                <Card.Text>

                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Col>


                        </Row>
                    </Container>



                    <Container>

                        <Row >
                            <Col><div className="cards">
                                <Card style={{ width: '18rem', height: "15rem" }}>
                                    <Link to="https://skander-page.vercel.app/"><Card.Img src={skander} /></Link>
                                    <Card.Body>
                                        <Card.Title> <h3 className='title'>• Skander Project</h3> </Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            </Col>

                            <Col>
                                <Col>
                                    <div className="cards">
                                        <Card style={{ width: '18rem', height: "15rem" }}>

                                            <Link to="https://login-register-project-nu.vercel.app/"><Card.Img src={login} style={{ height: "10rem" }} /></Link>
                                            <Card.Body>
                                                <Card.Title><h3 className='title'>• Login @ Register Project</h3></Card.Title>
                                                <Card.Text>

                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Col>


                        </Row>
                    </Container>


                </section>



            </div>

        </>
    )
}
