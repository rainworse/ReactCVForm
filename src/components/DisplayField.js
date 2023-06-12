import React, { Component } from 'react';

class DisplayField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-field">
        <div className="field-name">{this.props.name + ': '}</div>
        <div className="field-value">{this.props.value}</div>
      </div>
    );
  }
}

export default DisplayField;
