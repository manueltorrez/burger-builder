import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerMenu from '../Sidedrawer/HamburgerMenu/HamburgerMenu';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <HamburgerMenu clicked={props.hamburgerMenuClicked} />
        <Logo height="80%" />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;