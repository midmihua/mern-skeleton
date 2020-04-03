import React from 'react';
import PropTypes from 'prop-types';

import { Button as Btn } from 'semantic-ui-react';

const Button = ({
  children,
  onClick,
  disabled,
  className,
}) => {
  const calculateClassName = () => {
    let calculatedName = 'button__component';
    if (className) {
      calculatedName += ' className';
    }
    return calculatedName;
  }

  return (
    <Btn
      className={calculateClassName()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  onClick: null,
  disabled: null,
  className: null,
}

export default Button;
