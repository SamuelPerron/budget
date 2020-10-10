import React from 'react';

import Button from '../../components/Button/Button';

import './styles.scss';

const FullPage = props => {
    let backgroundClass = 'full-background';

    if (props.background === 'partial') {
        backgroundClass = 'partial-background';
    }

    return (
        <div className="full-page">
            <div className={backgroundClass} />

            { props.showClose ?
                <div className="close">
                    <Button label="X" type="close" onClick={() => props.history.goBack()} />
                </div>
            : null }

            {props.children}
        </div>
    );
}

export default FullPage;
