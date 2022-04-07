import React, { Component } from "react";
import Nav from "../Components/Nav";
import {StylesBaseline, Text, FrameCorners} from '@arwes/core';
import {AnimatorGeneralProvider} from '@arwes/animation';

const animatorGeneral = { duration: { enter: 200, exit: 200 } };
const duration = { enter: 3000 };

const About = () => {
        const [activate, setActivate] = React.useState(true);

        React.useEffect(() => {
            const timeout = setTimeout(() => setActivate(!activate), 2000);
            return () => clearTimeout(timeout);
        }, [activate]);
        return(
            <>
                <Nav/>
                <StylesBaseline />
                <div className={'content'}>
                    <AnimatorGeneralProvider animator={animatorGeneral}>\
                        <div style={{marginBottom: '50px'}}>
                            <FrameCorners
                                cornerWidth={1}
                                cornerLength={20}
                                showContentLines
                                contentLineWidth={1}
                                hover
                            >
                                <div style={{padding: '20px', textAlign: 'center'}}>
                                    <Text animator={{ duration }}>
                                        <p>
                                            Yes, I'm Win Htun Oo, a frontend web developer living in Yangon, Myanmar with
                                            3-years experience creating websites and web applications.
                                            I'm also learning&nbsp;
                                            <a href={'https://www.coursera.org/professional-certificates/google-ux-design'}>Google UX Design from Coursera</a>.
                                            &nbsp;Currently I'm seeking permanent job opportunities as a Mid-level Frontend Web Developer.
                                        </p>
                                    </Text>
                                </div>
                            </FrameCorners>
                        </div>
                        <div style={{width: '95%', margin: 'auto'}}>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    HTML
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    CSS
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    JavaScript
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    PHP
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    Bootstrap
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    Tailwind
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    JQuery
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    React
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    Laravel
                                </div>
                            </FrameCorners>
                            <FrameCorners animator={{ activate }} hover>
                                <div style={{ padding: '5px 30px'}}>
                                    Figma
                                </div>
                            </FrameCorners>
                        </div>
                    </AnimatorGeneralProvider>
                </div>
            </>
        )
}

export default About;