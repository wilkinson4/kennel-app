import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

class OwnerForm extends Component {
    state = {
        ownerName: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create owner      object, invoke the OwnerManager post method, and redirect to the full owner list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "") {
            window.alert("Please input an owner name");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                name: this.state.ownerName,
            };

            // Create the owner and redirect user to owner list
            OwnerManager.addOwner(owner)
                .then(() => this.props.history.push("/owners"));
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
                                id="ownerName"
                                placeholder="Owner name"
                            />
                            <label htmlFor="ownerName">Name</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm