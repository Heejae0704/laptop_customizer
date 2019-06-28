import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
    render() {
        return (
            <div className="feature">
                <div className="feature__name">{this.props.featureType}</div>
                <ul className="feature__list">
                {this.props.featureSpecs.map((item, index) => {
                    const selectedClass = item.name === this.props.selected[this.props.featureType].name ? 'feature__selected' : '';
                    const featureClass = 'feature__option ' + selectedClass;
                    return (
                        <li key={index} className="feature__item"> 
                            <div 
                                className={featureClass}
                                onClick={e => this.props.updateFeature(this.props.featureType, item)}>
                                {item.name}
                                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                                    .format(item.cost) })                                
                            </div>
                        </li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default Feature;