import React from 'react';
import { Route, Link } from 'react-router-dom';

import BudgetLine from '../BudgetLine/BudgetLine';

import './styles.scss';

const BudgetItem = props => {
    const to = '/budgets/' + props.id;

    return (
        <Route
            path={to}
            children={({ match }) => (
                <Link to={to}>
                    <div className="budget-item card">
                        <div className="budget-item-header">
                            <h2>{props.name}</h2>
                            <span>{props.type}</span>
                        </div>
                        <BudgetLine proportions={props.proportions} />
                    </div>
                </Link>
            )} />
    );
}

export default BudgetItem;
