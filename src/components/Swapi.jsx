import React, { Component } from "react";
import { getItems } from "../services/swapi-api";

function getQuatity(count, itemsOnPage) {
  if (!count || !itemsOnPage) {
    return 1;
  }
  return Math.ceil(count / itemsOnPage);
}

function showButtons(value) {
  console.log(value, "DFGHJ");
  const arr = [];
  for (let i = 0; i < value; i++) {
    arr.push(i + 1);
  }
  return arr;
}

export default class Swapi extends Component {
  state = {
    initialState: null,
    currentItem: "",
    count: "",
    page: 1,
  };

  async componentDidMount() {
    console.log(process.env.REACT_APP_BASE_URL, "URL");
    try {
      const response = await getItems();
      this.setState({ initialState: response });
    } catch (err) {
      console.log(err);
    }
  }
  handleClick = async (event) => {
    const { currentTarget } = event;
    const value = currentTarget.getAttribute("data-value");
    if (this.state[value]) {
      return;
    }
    try {
      const response = await getItems(value);
      this.setState({
        [value]: response.results,
        count: response.count,
        currentItem: value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handlePaginate = async ({ target }) => {
    const { currentItem } = this.state;
    const { value } = target;
    try {
      const response = await getItems(`${currentItem}?page=${value}`);
      console.log(response);
      //   this.setState({
      //     [value]: response.results,
      //     count: response.count,
      //     currentItem: value,
      //   });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.state, "STATE");
    const { initialState, currentItem, count } = this.state;
    if (!initialState) {
      return null;
    }
    const pages = getQuatity(count, this.state[currentItem]?.length);
    console.log(pages, "PAGES");
    const buttons = showButtons(pages);
    console.log(showButtons(pages), "Buttons");
    return (
      <div>
        <ul>
          {Object.keys(initialState).map((e) => (
            <li key={e} onClick={this.handleClick} data-value={e}>
              {e}
            </li>
          ))}
        </ul>
        <div>
          {this.state[currentItem]?.length > 0 &&
            this.state[currentItem].map((item) => (
              <div key={item.name || item.title}>{`${
                item.name || item.title
              }`}</div>
            ))}
        </div>
        <div>
          {buttons &&
            buttons.map((e) => (
              <button
                onClick={this.handlePaginate}
                key={e}
                type="button"
                value={e}
              >
                {e}
              </button>
            ))}
        </div>
      </div>
    );
  }
}
