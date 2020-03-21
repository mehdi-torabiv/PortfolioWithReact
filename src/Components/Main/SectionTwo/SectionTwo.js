import React from 'react';
import '../../Header/Header.css';
import Typed from 'react-typed';
import '../Main.css';
import Myphoto from '../../../assets/photo_2020-02-11_19-38-49.jpg';
import { Row, Col, Button } from 'react-bootstrap';
const SectionTwo = () => {
    return (
        <div id="about_me" className="about px-4 my-4" >
            <div className="me py-5">
                <h5 className="text-uppercase fontSize16 fontOs text-muted">
                    information
              </h5>
                <h1 className="text-uppercase fontStaat fontSize37">About Me</h1>
            </div>
            <Row className="m-0">
                <Col sm={5} className="pl-0">
                    <img src={Myphoto} className="img-fluid"></img>
                </Col>
                <Col sm={6}>
                    <h6 className="text-uppercase fontOs fontSize16 text-muted">
                        About Me
                    </h6>
                    <h5 className="fontRam fontSize20 py-2">
                        I'm Nima Torabi & <span>
                            <Typed
                                strings={[
                                    'Frontend Developer',
                                    'Freelancer',
                                    'UI/UX Designer'
                                ]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop={true}
                            ></Typed>
                        </span>
                    </h5>
                    <p className="fontRam py-2 text-black-50">
                        Hi, My Name is Nima Torabi.I Am Frontend Developer.
                    </p>
                    <div
                        className="d-flex flex-row flex-wrap justify-content-between py-4"
                    ></div>
                    <div className="d-flex flex-column">
                        <p className="fontRam">
                            <i className="fa fa-birthday-cake"><b className="fontRam"> Birthday: </b><span className=" fontRam text-black-50"
                            >24 February 1999</span></i>
                        </p>
                        <p className="fontRam">
                            <i className="fa fa-birthday-cake"><b className="fontRam"> Website: </b><span className=" fontRam text-black-50">www.nimatorabi.com</span></i>
                        </p>
                        <p className="fontRam">
                            <i className="fa fa-phone"><b className="fontRam"> Phone: </b><span className=" fontRam text-black-50">+989130243471</span></i>
                        </p>
                    </div>
                    <div class="d-flex flex-column ">
                        <p class="font-ram">
                            <i className="fa fa-degree ml-3"><b className="fontRam"> Degree: </b><span className=" fontRam text-black-50">Master</span></i></p>
                        <p class="font-ram">
                            <i className="fa fa-at"><b className="fontRam"> Email: </b><span className=" fontRam text-black-50">@rocketmail.com</span></i></p>
                        <p class="font-ram">
                            <i className="fa fa-instagram"><b className="fontRam"> Instagram: </b><span className=" fontRam text-black-50">nima_5t</span></i></p>
                    </div>
                    <Button variant="dark" className="text-uppercase mr-3">
                        Hire me
                    </Button>
                    <Button variant="dark" className="text-uppercase mr-3">
                        download CV
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default SectionTwo;
