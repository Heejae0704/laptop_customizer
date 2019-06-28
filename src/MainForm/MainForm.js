import React, { Component } from 'react';
import './MainForm.css';
import Feature from '../Feature/Feature';

class MainForm extends Component {
    
    render() {
        return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { Object.keys(this.props.features)
                .map((key, index) => {
                    return (
                        <Feature
                            key={index} 
                            featureType={key}
                            featureSpecs={this.props.features[key]}
                            selected={this.props.selected}
                            updateFeature={this.props.updateFeature}/>
                    )
                })}
        </section>
        );
    }
}

export default MainForm;