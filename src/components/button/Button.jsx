import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";

import styles from "./button.module.sass";

const Button = ({ children, type, className, ...props }) => {
  return (
    <button
      className={classNames(styles.wrapper, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  type: "button",
  className: "",
};
