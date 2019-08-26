import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">                
                    <h3>Location: <span className="card-locationName">{this.props.location.name}</span></h3>
                </div>
            </div>
        );
    }
}

export default LocationCard;