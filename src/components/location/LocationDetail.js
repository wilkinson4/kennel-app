import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import './LocationDetail.css'

class LocationDetail extends Component {

    state = {
        locations: []
    }

    componentDidMount() {
        console.log("LocationDetail: ComponentDidMount")
        //get(id) from LocationManager and hang on to the data; put it into state
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    street: location.street,
                    city: location.city,
                    stateCode: location.stateCode,
                    zip: location.zip,
                    loadingStatus: false
                })
            })
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
            <div className="card">
            <div className="card-content">                
                <h3>Location: <span className="card-locationName">{this.state.name}</span></h3>
                <p>Street: <span className="card-locationStreet">{this.state.street}</span></p>
                <p>City: <span className="card-locationCity">{this.state.city}</span></p>
                <p>State: <span className="card-locationState">{this.state.stateCode}</span></p>
                <p>Zip: <span className="card-locationZip">{this.state.zip}</span></p>
                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
            </div>
        </div>
        );
    }
}

export default LocationDetail