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
            id: 1,
            name: 'Main budget',
            type: 'Periodic',
            proportions: [
                {name: 'Needs', value: 0.528},
                {name: 'Wants', value: 0.102},
                {name: 'Savings', value: 0.294},
            ],
            total_income: 1465.41,
            total_spendings: 999.61,
            total_savings: 465.80,
            items: [
                {name: 'Pay', type: 'income', value: 1465.41},
                {name: 'Rent', type: 'need', value: 293.75},
                {name: 'Groceries', type: 'need', value: 127.54},
                {name: 'Gas', type: 'need', value: 73.90},
                {name: 'Personal care', type: 'need', value: 15.00},
                {name: 'Car loan', type: 'need', value: 187.29},
                {name: 'Insurance', type: 'need', value: 79.21},
                {name: 'Utilities', type: 'need', value: 61.06},
                {name: 'Food', type: 'want', value: 99.09},
                {name: 'Activities', type: 'want', value: 2.88},
                {name: 'Clothing', type: 'want', value: 2.66},
                {name: 'New things', type: 'want', value: 37.24},
                {name: 'TFSA home', type: 'saving', value: 175.0},
                {name: 'TFSA savings', type: 'saving', value: 39.21},
                {name: 'REER', type: 'saving', value: 100.0},
                {name: 'Goals', type: 'saving', value: 0.0},
                {name: 'Credit account', type: 'saving', value: 151.59},
            ],
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
