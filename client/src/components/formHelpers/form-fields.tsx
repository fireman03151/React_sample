import {
  Alert,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
  HelpBlock
} from '@freecodecamp/react-bootstrap';
import { kebabCase } from 'lodash-es';
import normalizeUrl from 'normalize-url';
import React from 'react';
import { Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { FormOptions } from './form';
import {
  editorValidator,
  localhostValidator,
  composeValidators,
  fCCValidator,
  httpValidator
} from './form-validators';

type FormFieldsProps = {
  formFields: { name: string; label: string }[];
  options: FormOptions;
};

function FormFields(props: FormFieldsProps): JSX.Element {
  const { t } = useTranslation();
  const { formFields, options = {} }: FormFieldsProps = props;
  const {
    ignored = [],
    placeholders = {},
    required = [],
    types = {},
    isEditorLinkAllowed = false,
    isLocalLinkAllowed = false
  } = options;

  const nullOrWarning = (
    value: string,
    error: unknown,
    isURL: boolean,
    name: string
  ) => {
    let validationError: string | undefined;
    if (value && isURL) {
      try {
        normalizeUrl(value, { stripWWW: false });
      } catch (err: unknown) {
        validationError = (err as { message?: string })?.message;
      }
    }
    const validationWarning = composeValidators(
      name === 'githubLink' || isEditorLinkAllowed ? null : editorValidator,
      fCCValidator,
      httpValidator,
      isLocalLinkAllowed ? null : localhostValidator
    )(value);
    const message: string = (error ||
      validationError ||
      validationWarning) as string;
    return message ? (
      <HelpBlock>
        <Alert
          bsStyle={error || validationError ? 'danger' : 'info'}
          closeLabel={t('buttons.close')}
        >
          {message}
        </Alert>
      </HelpBlock>
    ) : null;
  };
  return (
    <div>
      {formFields
        .filter(formField => !ignored.includes(formField.name))
        .map(({ name, label }) => (
          // TODO: verify if the value is always a string
          <Field key={`${kebabCase(name)}-field`} name={name}>
            {({ input: { value, onChange }, meta: { pristine, error } }) => {
              const key = kebabCase(name);
              const type = name in types ? types[name] : 'text';
              const placeholder =
                name in placeholders ? placeholders[name] : '';
              const isURL = types[name] === 'url';
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
                      value={value as string}
                    />
                    {nullOrWarning(
                      value as string,
                      !pristine && error,
                      isURL,
                      name
                    )}
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

export default FormFields;
