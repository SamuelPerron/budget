import React from 'react';
import './styles.scss';

const FullPageHeader = props => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default FullPageHeader;
