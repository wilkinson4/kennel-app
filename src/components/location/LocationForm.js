import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        locationStreet: "",
        locationCity: "",
        locationState: "",
        locationZip: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location      object, invoke the EmployeeManager post method, and redirect to the full location list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "" || this.state.breed === "") {
            window.alert("Please input all fields to create a location");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName,
                city: this.state.locationCity,
                stateCode: this.state.locationState,
                street: this.state.locationStreet,
                zip: this.state.locationZip
            };

            // Create the location and redirect user to location list
            LocationManager.addLocation(location)
                .then(() => this.props.history.push("/locations"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationName"
                                placeholder="Location name"
                            />
                            <label htmlFor="locationName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationStreet"
                                placeholder="Street"
                            />
                            <label htmlFor="locationStreet">Street</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationCity"
                                placeholder="City"
                            />
                            <label htmlFor="locationState">City</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationState"
                                placeholder="State"
                            />
                            <label htmlFor="locationState">State</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationZip"
                                placeholder="Zip"
                            />
                            <label htmlFor="locationZip">Zip</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm