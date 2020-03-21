import React from 'react';
import '../../Header/Header.css';
import '../Main.css';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import Progress from './Progress/Progress'
const SectionThree = (props) => {
    return (
        <div id="skill" className="skill px-4 py-5 bg-light">
            <div className="ability py-3">
                <h5 className="text-uppercase fontSize16 fontOs text-muted">
                    Ability
                </h5>
                <h1 class="text-uppercase fontStaat fontSize37">My Skill</h1>
            </div>
            <Row className="fontRam fontSize16 text-black-50">
                <Col sm={6} className="pl-4">
                    <p class="fontRam fontsize16 text-black-50 pb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                        animi nostrum veniam quaerat cumque maxime odit, sunt
                        consequatur obcaecati dolore sapiente at consectetur laborum
                        modi debitis ratione et perspiciatis deserunt corrupti?
                        Consectetur sunt deserunt excepturi, esse dolore officiis enim
                        eligendi?
                    </p>
                    <p class="fontRam fontSize16 text-black-50 pb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                        animi nostrum veniam quaerat cumque maxime odit, sunt
                        consequatur obcaecati dolore sapiente at consectetur laborum
                        modi debitis ratione et perspiciatis deserunt corrupti?
                        Consectetur sunt deserunt excepturi, esse dolore officiis enim
                        eligendi?
                    </p>
                </Col>
                <Col sm={6} className="bars">
                    <Progress name="90">
                        <p class="fontRam fontSize16">Developer</p>
                        <span class="fontRam fontSize16">90%</span>
                    </Progress>
                    <Progress name="70">
                        <p class="fontRam fontSize16">Photoshop</p>
                        <span class="fontRam fontSize16">70%</span>
                    </Progress>
                    <Progress name="55">
                        <p class="fontRam fontSize16">UX\UI</p>
                        <span class="fontRam fontSize16">55%</span>
                    </Progress>
                </Col>
            </Row>
        </div>
    );
}

export default SectionThree;
