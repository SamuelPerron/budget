import React from 'react';
import './styles.scss';

const Header = props => {
    return (
        <header class="header">
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;
