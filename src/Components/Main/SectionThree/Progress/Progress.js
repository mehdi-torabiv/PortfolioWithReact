import React from 'react';
import '../../Main.css';
import { Row, Col, ProgressBar } from 'react-bootstrap';
const Progress = (props) => {
    return (
        <div class="bar-1 mb-5">
            <div class="d-flex flex-row justify-content-between">
                {props.children}
            </div>
            <ProgressBar variant="dark" now={props.name} />
        </div>
    );
}

export default Progress;
