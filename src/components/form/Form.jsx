import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class Form extends Component {
  //   static propTypes = {
  //     prop: PropTypes,
  //   };
  state = this.props.initialValues || null;

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.formSubmit(this.state);
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children({ form: this.state, onChange: this.handleChange })}
      </form>
    );
  }
}
