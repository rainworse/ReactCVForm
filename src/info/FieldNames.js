const FieldNames = (() => {
  const name = { name: 'Name', id: 'name-input', type: 'text', required: true };
  const phone = {
    name: 'Phone',
    id: 'phone-input',
    type: 'tel',
    required: true,
  };
  const email = {
    name: 'Email',
    id: 'email-input',
    type: 'email',
    required: true,
  };

  const schoolName = {
    name: 'School name',
    id: 'school-name-input',
    type: 'text',
    required: true,
  };
  const titleOfStudy = {
    name: 'Title of study',
    id: 'title-of-study-input',
    type: 'text',
    required: false,
  };
  const dateOfStudy = {
    name: 'Date of study',
    id: 'date-of=study-input',
    type: 'date',
    required: false,
  };

  const companyName = {
    name: 'Company name',
    id: 'company-name-input',
    type: 'text',
    required: true,
  };
  const positionTitle = {
    name: 'Position title',
    id: 'position-title-input',
    type: 'text',
    required: true,
  };
  const responsibilities = {
    name: 'Responsibilities',
    id: 'responsibilities-input',
    type: 'text',
    required: false,
  };
  const dateStarted = {
    name: 'Date started',
    id: 'date-started-input',
    type: 'date',
    required: false,
  };
  const dateFinished = {
    name: 'Date finished',
    id: 'date-finished-input',
    type: 'date',
    required: false,
  };

  const getGeneralInfoFields = () => {
    return [name, phone, email];
  };

  const getEducationInfoFields = () => {
    return [schoolName, titleOfStudy, dateOfStudy];
  };

  const getWorkExperienceInfoFields = () => {
    return [
      companyName,
      positionTitle,
      responsibilities,
      dateStarted,
      dateFinished,
    ];
  };

  return {
    getGeneralInfoFields,
    getEducationInfoFields,
    getWorkExperienceInfoFields,
  };
})();

export default FieldNames;
