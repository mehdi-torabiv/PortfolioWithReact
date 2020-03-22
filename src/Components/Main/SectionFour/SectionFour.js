import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import '../../Header/Header.css';
import '../Main.css';
const SectionFour = () => {
    return (
        <div className="services-area px-4 py-5" id="Services">
            <div className="do py-5">
                <h5 className="text-uppercase fontSize16 fontOs text-muted">
                    What i do
                </h5>
                <h1 class="text-uppercase fontStaat fontSize37">services</h1>
            </div>
            <Row>
                <Col sm={6} md={4} className="mb-4 text-center">
                    <div className="panel border p-4 mb-4">
                        <span className="icon text-secondary">
                            <i className="fa fa-laptop fa-3x"></i>
                            <h4 className="fontRam py-4">Web Design</h4>
                            <p className="fontRam fontSize16 text-black-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi, ea!</p>
                        </span>
                    </div>
                    <div className="panel border p-4">
                        <span className="icon text-secondary">
                            <i className="fa fa-lightbulb-o fa-3x"></i>
                            <h4 className="fontRam py-4">Development</h4>
                            <p className="fontRam fontSize16 text-black-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi, ea!</p>
                        </span>
                    </div>
                </Col>
                <Col sm={6} md={4} className="mb-4 text-center">
                    <div className="panel border p-4 mb-4">
                        <span className="icon text-secondary">
                            <i className="fa fa-camera fa-3x"></i>
                            <h4 className="fontRam py-4">Photographi</h4>
                            <p className="fontRam fontSize16 text-black-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi, ea!</p>
                        </span>
                    </div>
                    <div className="panel border p-4">
                        <span className="icon text-secondary">
                            <i className="fa fa-car fa-3x"></i>
                            <h4 className="fontRam py-4">Marketing</h4>
                            <p className="fontRam fontSize16 text-black-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi, ea!</p>
                        </span>
                    </div>
                </Col>
                <Col sm={6} md={4} className="mb-4 text-center">
                    <div className="panel border p-4 mb-4">
                        <span className="icon text-secondary">
                            <i className="fa fa-mobile fa-3x"></i>
                            <h4 className="fontRam py-4">Fully Responsive</h4>
                            <p className="fontRam fontSize16 text-black-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi, ea!</p>
                        </span>
                    </div>
                    <div className="panel border p-4">
                        <span className="icon text-secondary">
                            <i className="fa fa-question fa-3x"></i>
                            <h4 className="fontRam py-4">Other work you want</h4>
                            <p className="fontRam fontSize16 text-black-50">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sequi, ea!</p>
                        </span>
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default SectionFour;
