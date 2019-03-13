import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

import Header from 'Components/Header';
import { required } from './validation';
import ErrMsg from './ErrMsg';
import './index.module.css';
import * as Yup from "yup";

const VonqForm = ({data, onSubmitForm}) => {
  if (Object.keys(data).length > 0) {
    return (
      <div className="container form">

        <Formik
          initialValues={{
            experience: data.fields.experience.value || '',
            education: data.fields.education.value || [],
            hours: { Min: data.fields.hours.value[0] || 32, Max: data.fields.hours.value[1] || 40 },
          }}
          validationSchema={
            Yup.object().shape({
              education: Yup.array().required(),
          })}
          onSubmit={(values) => onSubmitForm(values)}
          render={({ values, validateOnChange, errors, touched }) => (
            <Form>
              <Header title={data.title} icon={{ type: 'text', text: '1' }} info={data.info} />

               <fieldset styleName={errors.experience && touched.experience ? 'error' : ''}>
                <legend>{data.fields.experience.title}</legend>
                <Field type="number" name="experience" min="0" validate={required} placeholder="e.g. 5" />
                <ErrorMessage name="experience" component={ErrMsg} />
              </fieldset>

              <fieldset styleName={errors.education && touched.education ? 'error' : ''}>
                <FieldArray
                  name="education"
                  render={arrayHelpers => (
                    <React.Fragment>
                      {data.fields.education.options.map(opt => (
                        <div key={opt.name}>
                          <input
                            name="education"
                            type="checkbox"
                            value={opt.id}
                            checked={values.education.includes(opt.id)}
                            onChange={e => {
                              if (e.target.checked) {
                                arrayHelpers.push(opt.id);
                              } else {
                                const idx = values.education.indexOf(opt.id);
                                arrayHelpers.remove(idx);
                              }
                            }}
                          />
                          {opt.name}
                        </div>
                      ))}
                      <ErrorMessage name="education" render={() => <ErrMsg />} />
                    </React.Fragment>
                  )}
                />
              </fieldset>

              <fieldset>
                <legend>{data.fields.hours.title}</legend>

                <div styleName="field-row">
                  <div key={data.fields.hours.options[0].name}>
                    <span>{data.fields.hours.options[0].name}</span>
                    <Field type="number" name={`hours.Min`} validate={required} />
                    <ErrorMessage name="hours.Min" component={ErrMsg} />
                  </div>

                  <div key={data.fields.hours.options[1].name}>
                    <span>{data.fields.hours.options[1].name}</span>
                    <Field type="number" name={`hours.Max`} validate={required} />
                    <ErrorMessage name="hours.Max" component={ErrMsg} />
                  </div>
                </div>
              </fieldset>

              <div styleName="submit-wrap">
                <button type="submit">
                  SAVE
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }

  return null;
};

VonqForm.propTypes = {
  data: PropTypes.shape({}).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

VonqForm.displayName = 'Form';

export default VonqForm;
