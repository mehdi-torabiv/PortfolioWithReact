import React from 'react';
import '../../Header/Header.css';
import '../Main.css';
import Myphoto from '../../../assets/silhouette-of-woman-holding-sun-3792581.jpg';
import { Row, Col } from 'react-bootstrap';
const SectionFive = (props) => {
    return (
        <div className="references bg-light py-5 px-4" id="references">
            <div className="refer py-3">
                <h5 className="text-uppercase fontSize16 fontOs text-muted">
                    My Reference
              </h5>
                <h1 className="text-uppercase fontStaat fontSize37">References</h1>
            </div>
            <Row className="mb-5">
                <Col sm={4} className="my-3">
                    <img src={Myphoto} className="img-fluid" style={{ height: "350px", width: "450px" }}></img>
                </Col>
                <Col sm={4} className="my-3">
                    <img src={Myphoto} className="img-fluid" style={{ height: "350px", width: "450px" }}></img>
                </Col>
                <Col sm={4} className="my-3">
                    <img src={Myphoto} className="img-fluid" style={{ height: "350px", width: "450px" }}></img>
                </Col>
                <Col sm={4} className="my-3">
                    <img src={Myphoto} className="img-fluid" style={{ height: "350px", width: "450px" }}></img>
                </Col>
                <Col sm={4} className="my-3">
                    <img src={Myphoto} className="img-fluid" style={{ height: "350px", width: "450px" }}></img>
                </Col>
                <Col sm={4} className="my-3">
                    <img src={Myphoto} className="img-fluid" style={{ height: "350px", width: "450px" }}></img>
                </Col>
            </Row>
        </div>
    );
}

export default SectionFive;
