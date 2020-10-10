import React from 'react';
import './styles.scss';

const FullPageHeader = props => {
    return (
        <header className="header-full">
            <h1>{props.title}</h1>
        </header>
    );
}

export default FullPageHeader;
