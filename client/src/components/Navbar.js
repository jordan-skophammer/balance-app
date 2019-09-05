import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const Nav = () => {
    return (
        <Navbar brand={<div className="black-text">Welcome</div>} className="white black-text" alignLinks="right">
            <NavItem className="black-text" href="/">
                Home
            </NavItem>
            <NavItem className="black-text" href="/register">
                Register
            </NavItem>
            <NavItem className="black-text" href="/login">
                Login
            </NavItem>
        </Navbar>
    )    
}

export default Nav