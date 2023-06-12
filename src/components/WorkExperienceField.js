import React, { Component } from 'react';
import FieldNames from '../info/FieldNames';
import InputField from './InputField';
import '../styles/workexperiencefieldstyles.css';

class WorkExperienceField extends Component {
  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
  }

  removeThisField = (e) => {
    this.props.remove(this.props.info.key);
  };

  updateField(field, value) {
    this.props.updateField(this.props.info.key, field, value);
  }

  render() {
    return (
      <div className="work-experience-field">
        {FieldNames.getWorkExperienceInfoFields().map((field) => {
          return (
            <InputField
              field={field}
              updateMethod={this.updateField}
              key={field.id}
              value={this.props.info[field.id]}
            />
          );
        })}

        <input type="button" value="Remove" onClick={this.removeThisField} />
      </div>
    );
  }
}

export default WorkExperienceField;
