import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionTypes from '../../store/actionTypes';
import Page from '../../components/Page/Page';

import './styles.scss';

const BudgetDetails = props => {
    return (
        <Page title={props.name}>

        </Page>
    );
}

const mapStateToProps = state => {
    return {
        api: state.apiBaseURL,
        headers: state.headers
    };
};

export default connect(mapStateToProps)(BudgetDetails);
