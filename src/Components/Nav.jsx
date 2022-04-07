import {Component} from 'react';
import { StylesBaseline, Button, Text, FrameHexagon } from '@arwes/core';
import {Animator} from '@arwes/animation';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <StylesBaseline styles={{
                button: { margin: '0 20px 20px 0' }
            }} />
            <Animator animator={{ animate: true }}>
                <div className={'nav'}>
                    <Link to={'/'}>
                        <Button FrameComponent={FrameHexagon}>
                            Home
                        </Button>
                    </Link>
                    <Link to={'/about'}>
                        <Button FrameComponent={FrameHexagon}>
                            About
                        </Button>
                    </Link>
                    <Link to={'/works'}>
                        <Button FrameComponent={FrameHexagon}>
                            Works
                        </Button>
                    </Link>
                </div>
            </Animator>
        </>
    );
};

export default Nav;