import React, { Component } from 'react';
import './SummaryItem.css';

class SummaryItem extends Component {
    render() {
        return (
            <div className="summary__option">
                <div className="summary__option__label">{this.props.label}  </div>
                <div className="summary__option__value">{this.props.value}</div>
                <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.cost) }
                </div>
            </div>
        )

    }
}

export default SummaryItem;