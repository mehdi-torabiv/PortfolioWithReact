import React from 'react';
import '../../Components/Header/Header.css';
import '../Main/Main.css';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
const Footer = (props) => {
    return (
        <div id="footer" className="pt-5 px-3">
            <div id="contact_us">
                <div className="py-3 px-2">
                    <h5 className="text-uppercase fontSize16 fontOs text-muted">
                        Location
                </h5>
                    <h1 className="text-uppercase fontStaat fontSize37">
                        Contact Me
                </h1>
                </div>
            </div>
            <Row className="py-5">
                <Col sm={6}>
                    <h6 className="text-uppercase fontSize16 fontRam text-dark">
                        NIBI company lnc.
                  </h6>
                    <p className="fontRam w-50 fontSize16 text-black-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio ea neque ab?
                  </p>
                    <p className="fontRam fontSize16 text-black-50 pt-3">
                        <i className="fa fa-phone "
                        ><span className=" fontRam fontSize16">
                                Phone: +989130243471</span></i>
                    </p>
                    <p class="fontRam fontSize16 text-black-50">
                        <i class="fa fa-fax "
                        ><span class=" fontRam fontSize16">
                                Fax: +9803133661100</span></i>
                    </p>
                    <p class="fontRam fontSize16 text-black-50">
                        <i class="fa fa-at "
                        ><span class=" fontRam fontSize16">
                                Email: nimatorabi@rocketmail.com</span></i>
                    </p>
                    <p class="fontRam fontSize16 text-black-50">
                        <i class="fa fa-address-card "
                        ><span class=" fontRam fontSize16">
                                Address: Esf-Mardavij-b lale-p124</span></i>
                    </p>
                </Col>
                <Col>
                    <h6 className="text-uppercase fontRam fontSize16">
                        Get in touch
                  </h6>
                    <form action="" class="py-3">
                        <div className="row">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="3"
                            className="form-control my-4"
                            placeholder="Message"
                        ></textarea>
                        <button type="submit" className="btn btn-dark">
                            Send Message!
                    </button>
                    </form>
                </Col>
            </Row>
            <Row className="bg-light py-5">
                <Col sm={4} className="my-5 text-center">
                    <h6 className="fontRam fontSize16 text-black-50">
                        &copy;2020 NIBI.All rights reserved.
                  </h6>
                </Col>
                <Col sm={4} className="my-4 text-center">
                    <div className="footer-title text-light">
                        <a
                            href=""
                            className="navbarBrand fontStaat fontSize40 text-dark"
                        >NIBI</a>
                        <p className="description fontOs fontSize16 text-black-50 text-uppercase">
                            Nima Torabi
                        </p>
                    </div>
                </Col>
                <Col sm={4} className="my-4 text-center">
                    <span className="mr-3">
                        <i className="fa fa-facebook fa-2x"></i>
                    </span>
                    <span className="mr-3">
                        <i className="fa fa-twitter fa-2x"></i>
                    </span>
                    <span className="mr-3">
                        <i className="fa fa-instagram fa-2x"></i>
                    </span>
                    <span className="mr-3">
                        <i className="fa fa-youtube fa-2x"></i>
                    </span>
                </Col>
            </Row>
        </div>
    );
}

export default Footer;
