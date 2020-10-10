import React from 'react';
import './styles.scss';

const Button = props => {
    let classes = '';

    switch (props.size) {
        case 'large':
            classes = classes + 'large';
            break;
        case 'small':
            classes = classes + 'small';
            break;
    }

    switch (props.type) {
        case 'close':
            classes = classes + 'close';
            break;
    }

    return (
        <button className={classes} onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default Button;
