import React from 'react';
import './styles.scss';

const SideMenu = props => {
    return (
        <nav>
            {props.children}
        </nav>
    );
}

export default SideMenu;
