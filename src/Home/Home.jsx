import React, { Component } from "react";
import Background from "../Components/Background";
import Nav from "../Components/Nav";
import Me from '../images/me.jpg';
import './Home.css';
import Resume from './Resume.pdf';
import {StylesBaseline, Button, Text, FrameBox, FramePentagon} from '@arwes/core';
import {AnimatorGeneralProvider} from '@arwes/animation';

const textList = [
    'Frontend Web Developer',
    'UI/UX Designer in Training'
];
const animatorGeneral = { duration: { enter: 200, exit: 200 } };
const duration = { enter: 2000, exit: 1000 };

const Home = () => {
    const [textIndex, setTextIndex] = React.useState(0);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            const isLastIndex = textIndex === textList.length - 1;
            const nextIndex = isLastIndex ? 0 : textIndex + 1;
            setTextIndex(nextIndex);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [textIndex]);

    const [activate, setActivate] = React.useState(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => setActivate(!activate), 2000);
        return () => clearTimeout(timeout);
    }, [activate]);

    return (
        <>
            <Nav/>
            <div className={'content'}>
                <StylesBaseline />
                <AnimatorGeneralProvider animator={animatorGeneral}>
                    <div style={{width: '30%', margin: 'auto'}}>
                        <FrameBox
                            animator={{activate}}
                            origins={['left', 'top', 'right', 'bottom']}
                            hover>
                                <img src={Me} width={'100%'} alt={'Win Htun Oo'}/>
                        </FrameBox>
                    </div>
                    <div style={{textAlign: 'center', marginTop: '60px'}}>
                        <Text as={'h1'}>Hello, I'm Win Htun Oo</Text>
                        <div style={{fontStyle: 'italic'}}>
                            <Text as={'h6'} animator={{ duration }}>
                                {textList[textIndex]}
                            </Text>
                        </div>
                    </div>
                    <div style={{marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
                        <a href={Resume} download={'WinHtunOo_Resume'} target={'_blank'}>
                            <Button
                                onClick={event => console.log(event)}
                                FrameComponent={FramePentagon}
                            >
                                <Text>resume</Text>
                            </Button>
                        </a>
                        <a href={'https://www.linkedin.com/in/win-htun-oo'} target={'_blank'}>
                            <Button
                                onClick={event => console.log(event)}
                                FrameComponent={FramePentagon}
                            >
                                <Text>linkedin</Text>
                            </Button>
                        </a>
                        <a href={'https://github.com/WinHtunOo29'} target={'_blank'}>
                            <Button
                                onClick={event => console.log(event)}
                                FrameComponent={FramePentagon}
                            >
                                <Text>Github</Text>
                            </Button>
                        </a>
                    </div>
                </AnimatorGeneralProvider>
            </div>
        </>
    );
};

export default Home;