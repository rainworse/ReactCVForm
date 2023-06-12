import React, { Component } from 'react';
import EducationField from './EducationField';

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }

  addEducation = (e) => {
    this.props.addEducationField();
  };

  render() {
    return (
      <fieldset>
        <legend>Education information:</legend>

        {this.props.educations.map((education) => {
          return (
            <EducationField
              info={education}
              key={education.key}
              remove={this.props.removeEducationField}
              updateField={this.props.updateEducationField}
            />
          );
        })}

        <input type="button" value="+" onClick={this.addEducation} />
      </fieldset>
    );
  }
}

export default EducationInfo;
