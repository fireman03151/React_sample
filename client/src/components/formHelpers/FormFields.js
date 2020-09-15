import React from 'react';
import { kebabCase } from 'lodash';
import PropTypes from 'prop-types';
import {
  Alert,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import { Field } from 'react-final-form';

const propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, label: PropTypes.string })
      .isRequired
  ).isRequired,
  options: PropTypes.shape({
    ignored: PropTypes.arrayOf(PropTypes.string),
    placeholders: PropTypes.objectOf(PropTypes.string),
    required: PropTypes.arrayOf(PropTypes.string),
    types: PropTypes.objectOf(PropTypes.string)
  })
};

function FormFields(props) {
  const { formFields, options = {} } = props;
  const {
    ignored = [],
    placeholders = {},
    required = [],
    types = {}
  } = options;

  return (
    <div>
      {formFields
        .filter(formField => !ignored.includes(formField.name))
        .map(({ name, label }) => (
          <Field key={`${kebabCase(name)}-field`} name={name}>
            {({ input: { value, onChange }, meta: { pristine, error } }) => {
              const key = kebabCase(name);
              const type = name in types ? types[name] : 'text';
              const placeholder =
                name in placeholders ? placeholders[name] : '';
              return (
                <Col key={key} xs={12}>
                  <FormGroup>
                    {type === 'hidden' ? null : (
                      <ControlLabel htmlFor={key}>{label}</ControlLabel>
                    )}
                    <FormControl
                      componentClass={type === 'textarea' ? type : 'input'}
                      id={key}
                      name={name}
                      onChange={onChange}
                      placeholder={placeholder}
                      required={required.includes(name)}
                      rows={4}
                      type={type}
                      value={value}
                    />
                    {error && !pristine ? (
                      <HelpBlock>
                        <Alert bsStyle='danger'>{error}</Alert>
                      </HelpBlock>
                    ) : null}
                  </FormGroup>
                </Col>
              );
            }}
          </Field>
        ))}
    </div>
  );
}

FormFields.displayName = 'FormFields';
FormFields.propTypes = propTypes;

export default FormFields;
