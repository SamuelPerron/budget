import React from 'react';
import './styles.scss';

const FullPageForm = props => {
    const { data, errors } = props;

    return (
        <div className="form" data-aos="fade-up">
            <div className="elements">
                {props.children}
            </div>
        </div>
    );
}

export default FullPageForm;
