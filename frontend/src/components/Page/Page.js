import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTags, faWallet, faSyncAlt, faCogs } from '@fortawesome/free-solid-svg-icons';

import SideMenu from '../SideMenu/SideMenu';
import SideMenuItem from '../SideMenuItem/SideMenuItem';
import Header from '../Header/Header';

import './styles.scss';

const Page = props => {
    return (
        <div className="page">
            <SideMenu>
                <SideMenuItem to="/home"><FontAwesomeIcon icon={faHome} /></SideMenuItem>
                <SideMenuItem to="/budgets"><FontAwesomeIcon icon={faTags} /></SideMenuItem>
                <SideMenuItem to="/accounts"><FontAwesomeIcon icon={faWallet} /></SideMenuItem>
                <SideMenuItem to="/sync"><FontAwesomeIcon icon={faSyncAlt} /></SideMenuItem>
                <SideMenuItem to="/settings"><FontAwesomeIcon icon={faCogs} /></SideMenuItem>
            </SideMenu>

            <Header title={props.title} />

            {props.children}
        </div>
    );
}

export default Page;
