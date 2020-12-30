import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Search, Language, ExpandMore } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src="https://i.pinimg.com/564x/1a/dd/e8/1adde8bf514c8868d662ac5897891417.jpg" alt="logo"></img>
            </Link>
            <div className="header__center">
                <input type="text" />
                <Search />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <IconButton>
                    <Language />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
