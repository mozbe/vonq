import React from 'react';
import SVG from 'react-inlinesvg';
import './index.module.css';

const ErrMsg = () => (
  <div styleName="error-msg">
    <SVG src="/assets/icon-warning.svg" /> The field is required
  </div>
);

export default ErrMsg;
