import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolbar = (props) => (

    <div className={'Toolbar'}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <Logo height="80%" />
        <nav className={'DesktopOnly'}>
            <NavigationItems />
        </nav>
    </div>
);

export default toolbar