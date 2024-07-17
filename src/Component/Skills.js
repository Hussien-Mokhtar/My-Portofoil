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
import { IoIosCheckboxOutline } from "react-icons/io";

export default function Skills() {
    
  return (
  <>
                 <Navbar style={{ backgroundColor: "dodgerblue" }} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><div className="up-left">Hussien Mokhtar</div></Navbar.Brand>
                    <Nav className="ml-auto ">
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
                    <Button variant="primary"><Link to=" file:///C:/Users/HP/Downloads/MY%20CV.pdf">
                        <h1 >MY CV <GiClick className='click' /></h1></Link></Button>
                </div>
                <div className="btn-2">
                    <button> <Link to="/"><h2>Projects</h2></Link> </button>
                    <button> <Link to="/"><h2>Skills</h2></Link> </button>
                </div>



             



                </div>





                <div className="card" style={{ border: "none" }}>

                    <div className="checks">
                    <span><IoIosCheckboxOutline  className='check'/>HTML</span>
                    <span><IoIosCheckboxOutline className='check'/>CSS</span>
                    <span><IoIosCheckboxOutline className='check'/>JavaScript</span>

                    </div>

                    <div className="checks">

                    <span><IoIosCheckboxOutline className='check'/>REACT.JS</span>
                    <span><IoIosCheckboxOutline className='check'/>BootStrap</span>
                    <span><IoIosCheckboxOutline className='check'/>Prime</span>
                    </div>

                </div>
                




 


                </>
   
  )
}
