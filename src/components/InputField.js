import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.updateMethod(this.props.field.id, e.target.value);
  };

  render() {
    return (
      <p className="input-field">
        <label htmlFor={this.props.field.id}>
          {this.props.field.name + ': '}
        </label>
        <input
          type={this.props.field.type}
          name={this.props.field.name}
          id={this.props.field.id}
          onChange={this.handleChange}
          value={this.props.value}
          required={this.props.field.required}
        />
      </p>
    );
  }
}

export default InputField;
