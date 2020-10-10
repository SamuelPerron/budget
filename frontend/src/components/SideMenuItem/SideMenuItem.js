import React from 'react';
import { Route, Link } from 'react-router-dom';

import './styles.scss';

const SideMenuItem = props => {
    return (
        <Route
            path={props.to}
            children={({ match }) => (
                <Link to={props.to}>
                    <div className={match ? 'active nav-item' : 'nav-item'}>
                        {props.children}
                    </div>
                </Link>
            )} />
    );
}

export default SideMenuItem;
