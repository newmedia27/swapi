import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../../services/swapi-api";

export default class Home extends Component {
  state = {
    menu: null,
  };
  async componentDidMount() {
    try {
      const response = await getItems();
      this.setState({ menu: response });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    console.log(this.state);
    const { menu } = this.state;

    if (!menu) {
      return null;
    }

    return (
      <div>
        <ul>
          {Object.keys(menu).map((menuItem) => (
            <li key={menuItem}>
              <Link to={`/list/${menuItem}`}>{menuItem}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
