import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">                
                    <h3>Employee: <span className="card-locationName">{this.props.employee.name}</span></h3>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge Employee</button>
                </div>
            </div>
        );
    }
}

export default EmployeeCard;