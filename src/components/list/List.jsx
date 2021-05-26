import React from "react";
import PropTypes from "prop-types";

const List = ({ children }) => {
  return <div>{children}</div>;
};

export default List;

List.propTypes = {
  children: PropTypes.node.isRequired,
};
