import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionTypes from '../../store/actionTypes';
import Page from '../../components/Page/Page';
import Button from '../../components/Button/Button';
import BudgetItem from '../../components/BudgetItem/BudgetItem';

import './styles.scss';

const Budgets = props => {
    const [budgets, setBudgets] = useState([
        {
            name: 'Main budget',
            type: 'Periodic',
            items: [
                {name: 'Needs', value: 0.528},
                {name: 'Wants', value: 0.102},
                {name: 'Savings', value: 0.294},
            ]
        },
        {
            name: 'Kitchen renovation',
            type: 'One time',
            items: [
                {name: 'Used', value: 0.782},
            ]
        },
    ]);

    return (
        <Page title="Budgets">
            <div className="budget-list">
                { budgets.map(budget => (
                    <BudgetItem {...budget} />
                )) }
                <div>
                    <Button label="Create new +" type="text"/>
                </div>
            </div>
        </Page>
    );
}

const mapStateToProps = state => {
    return {
        api: state.apiBaseURL,
        headers: state.headers
    };
};

export default connect(mapStateToProps)(Budgets);
