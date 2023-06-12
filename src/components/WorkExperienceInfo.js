import React, { Component } from 'react';
import WorkExperienceField from './WorkExperienceField';

class WorkExperienceInfo extends Component {
  constructor(props) {
    super(props);
  }

  addWorkExperience = (e) => {
    this.props.addWorkExperienceField();
  };

  render() {
    return (
      <fieldset>
        <legend>Work Experience:</legend>

        {this.props.workExperiences.map((workExperience) => {
          return (
            <WorkExperienceField
              info={workExperience}
              key={workExperience.key}
              remove={this.props.removeWorkExperienceField}
              updateField={this.props.updateWorkExperienceField}
            />
          );
        })}

        <input type="button" value="+" onClick={this.addWorkExperience} />
      </fieldset>
    );
  }
}

export default WorkExperienceInfo;
