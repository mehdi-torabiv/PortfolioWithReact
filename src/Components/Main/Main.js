import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './Main.css';
import '../Header/Header.css';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo'
const Main = (props) => {
    return (
        <main>
            <Row>
                <Col className="px-0" md={{ size: 9, offset: 3 }}>
                    <SectionOne></SectionOne>
                    <SectionTwo></SectionTwo>
                </Col>
            </Row>
        </main>
    );
}

export default Main;
