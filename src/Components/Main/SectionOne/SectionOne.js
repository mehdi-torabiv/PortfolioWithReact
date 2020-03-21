import React, { Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';
import '../../Header/Header.css';
import '../Main.css';
class SectionOne extends Component {
    render() {
        return (
            <div id="home" className="siteBanner px-0" >
                <div className="bannerArea">
                    <div className="author text-center">
                        <div className="authorImg"></div>
                        <h1
                            class="text-white font-staat font-size-40 text-uppercase py-3"
                        >
                            Nima Torabi
                    </h1>
                        <h5 class="text-white font-ram font-size-27">
                            I'm <span>
                                <Typed
                                    strings={[
                                        'Frontend Developer',
                                        'Freelancer',
                                        'UI/UX Designer'
                                    ]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop={true}>

                                </Typed>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionOne;
