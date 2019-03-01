import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = {
      name,
      email,
      message
    };
    this.props.addLead(lead);
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body">
        <h2>Add Lead</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Message</label>
            <textarea
              type="text"
              className="form-control"
              name="message"
              value={message}
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addLead }
)(Form);
