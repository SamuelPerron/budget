import React from 'react';

import BudgetLine from '../BudgetLine/BudgetLine';

import './styles.scss';

const BudgetItem = props => {
    return (
        <div className="budget-item card">
            <div className="budget-item-header">
                <h2>{props.name}</h2>
                <span>{props.type}</span>
            </div>
            <BudgetLine items={props.items} />
        </div>
    );
}

export default BudgetItem;
