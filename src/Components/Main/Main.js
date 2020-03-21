import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './Main.css';
import '../Header/Header.css';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import SectionFour from './SectionFour/SectionFour';
const Main = (props) => {
    return (
        <main>
            <Row>
                <Col className="px-0" md={{ size: 9, offset: 3 }}>
                    <SectionOne></SectionOne>
                    <SectionTwo></SectionTwo>
                    <SectionThree></SectionThree>
                    <SectionFour></SectionFour>
                </Col>
            </Row>
        </main>
    );
}

export default Main;
