import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import './index.module.css';

const Header = ({ title, info, icon }) => (
  <div styleName="header">
    <legend>
      <span styleName={`icon icon-${icon.type.toString()}`}>
        {icon.type === 'svg'
          ? <SVG src={icon.src} />
          : <span>{icon.text}</span>
        }
      </span>
      {title}
    </legend>

    <p>{info}</p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  icon: PropTypes.shape({
    src: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
  }),
};

Header.defaultProps = {
  icon: {
    src: '',
    text: '',
    type: '',
  }
};

Header.displayName = 'Header';

export default Header;
