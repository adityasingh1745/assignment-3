import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            email_id: ''
        }
        this.changefirst_nameHandler = this.changefirst_nameHandler.bind(this);
        this.changelast_nameHandler = this.changelast_nameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((res) => {
                let employee = res.data;
                this.setState({
                    first_name: employee.first_name,
                    last_name: employee.last_name,
                    email_id: employee.email_id
                });
            });
        }
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { first_name: this.state.first_name, last_name: this.state.last_name, email_id: this.state.email_id };
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
            });
        } else {
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
            });
        }
    }

    changefirst_nameHandler = (event) => {
        this.setState({ first_name: event.target.value });
    }

    changelast_nameHandler = (event) => {
        this.setState({ last_name: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email_id: event.target.value });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    getTitle() {
        if (this.state.id === '_add') {
            // return <h3 className="text-center">Add Employee</h3>
            return console.log("Hello dear")
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="first_name" className="form-control"
                                            value={this.state.first_name} onChange={this.changefirst_nameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="last_name" className="form-control"
                                            value={this.state.last_name} onChange={this.changelast_nameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="email_id" className="form-control"
                                            value={this.state.email_id} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent