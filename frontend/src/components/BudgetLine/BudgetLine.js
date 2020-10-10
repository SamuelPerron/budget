import React from 'react';
import './styles.scss';

const BudgetLine = props => {
    return (
        <div className="budget-line">
            { props.items.map(item => {
                let style = '';
                switch (item.name) {
                    case 'Wants':
                        style = 'wants';
                        break;
                    case 'Needs':
                        style = 'needs';
                        break;
                    case 'Savings':
                        style = 'savings';
                        break;
                    case 'Used':
                        style = 'used';
                        break;
                }

                const widthPercentage = item.value * 100;
                const width = {width: widthPercentage + '%'};

                return (
                    <div className={style} style={width}>
                        <div/>
                        <span>{item.name}</span>
                    </div>
                )
            }) }
        </div>
    );
}

export default BudgetLine;
