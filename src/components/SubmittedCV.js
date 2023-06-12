import React, { Component } from 'react';
import FieldNames from '../info/FieldNames';
import '../styles/submittedcvstyles.css';
import DisplayField from './DisplayField';

class SubmittedCV extends Component {
  constructor(props) {
    super(props);
  }

  educationToJSX(education) {
    return (
      <div className="education">
        {FieldNames.getEducationInfoFields().map((field) => {
          return <DisplayField name={field.name} value={education[field.id]} />;
        })}
      </div>
    );
  }

  workExperienceToJSX(workExperience) {
    return (
      <div className="work-experience">
        {FieldNames.getWorkExperienceInfoFields().map((field) => {
          return (
            <DisplayField name={field.name} value={workExperience[field.id]} />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="cv">
        <div className="general-info">
          {FieldNames.getGeneralInfoFields().map((field) => {
            return (
              <DisplayField
                name={field.name}
                value={this.props.values[field.id]}
              />
            );
          })}
        </div>

        <div className="education-title">Education:</div>
        {this.props.values.educations.map((education) => {
          return this.educationToJSX(education);
        })}

        <div className="work-experience-title">Work experience:</div>
        {this.props.values.workExperiences.map((workExperience) => {
          return this.workExperienceToJSX(workExperience);
        })}
      </div>
    );
  }
}

export default SubmittedCV;
