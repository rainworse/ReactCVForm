import React, { Component } from 'react';
import '../styles/formstyles.css';
import FieldNames from '../info/FieldNames';
import GeneralInfo from './GeneralInfo';
import EducationInfo from './EducationInfo';
import uniqid from 'uniqid';
import WorkExperienceInfo from './WorkExperienceInfo';
import SubmittedCV from './SubmittedCV';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.setFieldState = this.setFieldState.bind(this);

    this.addEducationField = this.addEducationField.bind(this);
    this.removeEducationField = this.removeEducationField.bind(this);
    this.setEducationFieldState = this.setEducationFieldState.bind(this);

    this.addWorkExperienceField = this.addWorkExperienceField.bind(this);
    this.removeWorkExperienceField = this.removeWorkExperienceField.bind(this);
    this.setWorkExperienceFieldState =
      this.setWorkExperienceFieldState.bind(this);
  }

  getInitialState() {
    const state = {};
    for (const field of FieldNames.getGeneralInfoFields()) {
      state[field.id] = '';
    }
    state.educationCount = 0;
    state.educations = [];
    state.workExperienceCount = 0;
    state.workExperiences = [];
    state.formSubmitted = false;

    return state;
  }

  setFieldState(field, value) {
    const updatedValue = {};
    updatedValue[field] = value;
    this.setState(updatedValue);
  }

  addEducationField() {
    const newEducation = {};
    for (const field of FieldNames.getEducationInfoFields()) {
      newEducation[field.id] = '';
    }
    newEducation.key = uniqid();

    this.setState({
      educationCount: this.state.educationCount + 1,
      educations: this.state.educations.concat(newEducation),
    });
  }

  removeEducationField(educationKey) {
    this.setState({
      educationCount: this.state.educationCount - 1,
      educations: this.state.educations.filter(
        (education) => education.key != educationKey
      ),
    });
  }

  setEducationFieldState(key, field, value) {
    this.setState({
      educations: this.state.educations.map((education) => {
        if (education.key == key) {
          education[field] = value;
        }

        return education;
      }),
    });
  }

  addWorkExperienceField() {
    const newWorkExperience = {};
    for (const field of FieldNames.getWorkExperienceInfoFields()) {
      newWorkExperience[field.id] = '';
    }
    newWorkExperience.key = uniqid();

    this.setState({
      workExperienceCount: this.state.workExperienceCount + 1,
      workExperiences: this.state.workExperiences.concat(newWorkExperience),
    });
  }

  removeWorkExperienceField(workExperienceKey) {
    this.setState({
      workExperienceCount: this.state.workExperienceCount - 1,
      workExperiences: this.state.workExperiences.filter(
        (workExperience) => workExperience.key != workExperienceKey
      ),
    });
  }

  setWorkExperienceFieldState(key, field, value) {
    this.setState({
      workExperiences: this.state.workExperiences.map((workExperience) => {
        if (workExperience.key == key) {
          workExperience[field] = value;
        }

        return workExperience;
      }),
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    if (this.validateForm(this.state)) {
      this.setState({
        formSubmitted: true,
      });
    }
  };

  validateForm(state) {
    return true;
  }

  editForm = (e) => {
    e.preventDefault();
    this.setState({
      formSubmitted: false,
    });
  };

  render() {
    if (!this.state.formSubmitted) {
      return (
        <form onSubmit={this.submitForm}>
          <GeneralInfo updateMethod={this.setFieldState} state={this.state} />
          <EducationInfo
            educations={this.state.educations}
            addEducationField={this.addEducationField}
            removeEducationField={this.removeEducationField}
            updateEducationField={this.setEducationFieldState}
          />
          <WorkExperienceInfo
            workExperiences={this.state.workExperiences}
            addWorkExperienceField={this.addWorkExperienceField}
            removeWorkExperienceField={this.removeWorkExperienceField}
            updateWorkExperienceField={this.setWorkExperienceFieldState}
          />

          <input type="submit" value="Submit" className="submit-button" />
        </form>
      );
    } else {
      return (
        <div className="finished-cv">
          <SubmittedCV values={this.state} />
          <button onClick={this.editForm} className="edit-button">
            Edit
          </button>
        </div>
      );
    }
  }
}

export default Form;
