import React from 'react';
import PropTypes from 'prop-types';

import Header from 'Components/Header';
import './index.module.css';


const Summary = ({ data, onEdit }) => {
  const { education } = data.fields;
  const edItems = education.value.map(a =>
    education.options.find(b => b.id === a
  ));

  return (
    <div className="container" styleName="summary">
      <Header title="Job Criteria" icon={{ type: 'svg', src: '/assets/icon-done.svg' }} />

      <div styleName="summary-row">
        A minimum No. years of experience: <strong>{data.fields.experience.value}</strong>
      </div>

      <div styleName="summary-row">
        No. of working hours (per week): <strong>{data.fields.hours.value[0]}-{data.fields.hours.value[1]}</strong>
      </div>

      <div styleName="summary-row">
        <strong>Level of education:</strong>
        <div styleName="summary-items">
          {edItems.map(ed =>
            <span styleName="summary-item" key={ed.id}>{ed.name}</span>
          )}
        </div>
      </div>

      <div styleName="submit-wrap">
        <button type="submit" onClick={onEdit}>
          EDIT
        </button>
      </div>
    </div>
  );
};


Summary.propTypes = {
  data: PropTypes.shape({}).isRequired,
  onEdit: PropTypes.func.isRequired,
};

Summary.displayName = 'Summary';


export default Summary;
