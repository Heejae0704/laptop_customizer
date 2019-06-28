import React, { Component } from 'react';
import './Summary.css';
import SummaryItem from '../SummaryItem/SummaryItem';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class Summary extends Component {
    render() {                
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {Object.keys(this.props.selected)
                    .map((key, index) => 
                    <SummaryItem 
                        key={index}
                        label={key} 
                        value={this.props.selected[key].name} 
                        cost={this.props.selected[key].cost}/>)}
                <SummaryTotal selected={this.props.selected} />
            </section>
        )
    }
}

export default Summary;