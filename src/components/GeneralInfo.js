import React, { Component } from 'react';
import InputField from './InputField';
import FieldNames from '../info/FieldNames';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>General information:</legend>
        {FieldNames.getGeneralInfoFields().map((field) => {
          return (
            <InputField
              field={field}
              updateMethod={this.props.updateMethod}
              key={field.id}
              value={this.props.state[field.id]}
            />
          );
        })}
      </fieldset>
    );
  }
}

export default GeneralInfo;
