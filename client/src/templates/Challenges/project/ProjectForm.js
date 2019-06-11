import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../../components/formHelpers';

const propTypes = {
  isFrontEnd: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  updateProjectForm: PropTypes.func.isRequired
};

const frontEndFields = ['solution'];
const backEndFields = ['solution', 'githubLink'];

const options = {
  types: {
    solution: 'url',
    githubLink: 'url'
  },
  required: ['solution', 'githubLink']
};

export class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.updateProjectForm({});
  }
  componentDidUpdate() {
    this.props.updateProjectForm({});
  }
  componentWillUnmount() {
    this.props.updateProjectForm({});
  }
  handleSubmit(values) {
    this.props.updateProjectForm(values);
    this.props.onSubmit();
  }
  render() {
    const { isSubmitting, isFrontEnd } = this.props;
    const buttonCopy = isSubmitting
      ? 'Submit and go to my next challenge'
      : "I've completed this challenge";
    return (
      <Form
        buttonText={`${buttonCopy}`}
        formFields={isFrontEnd ? frontEndFields : backEndFields}
        id={isFrontEnd ? 'front-end-form' : 'back-end-form'}
        options={options}
        submit={this.handleSubmit}
      />
    );
  }
}

ProjectForm.propTypes = propTypes;

export default ProjectForm;
