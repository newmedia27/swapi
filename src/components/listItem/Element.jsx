import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Element = ({ alias, id, item }) => {
  if (!alias || !id || !item) {
    return null;
  }
  return (
    <div
    //  className={styles.wrapper}
    >
      <Link to={`/item/${alias}/${id}`} key={item.name || item.title}>
        {item.name || item.title}
      </Link>
    </div>
  );
};

export default Element;

Element.propTypes = {
  alias: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
