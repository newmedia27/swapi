import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../../services/swapi-api";
import { getQuatity } from "./utils";

import styles from "./list-item.module.sass";
import List from "../../components/list";
import Element from "../../components/listItem/Element";
import Button from "../../components/button/Button";
import Form from "../../components/form";

export default class ListItem extends Component {
  isLoaded = false;
  state = {
    entities: null,
    load: false,
    count: 0,
    currentPage: 1,
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevParams = prevProps?.match?.params?.entity || null;
    const params = this.props?.match?.params?.entity || null;

    if (prevParams !== params) {
      await this.handleFetch();
    }
  }
  async componentDidMount() {
    await this.handleFetch();
  }
  componentWillUnmount() {
    this.isLoaded = false;
  }
  handleFetch = async () => {
    const {
      match: { params },
    } = this.props;
    try {
      this.isLoaded = true;
      this.setState({ load: true });
      const response = await getItems(params.entity);
      console.log(response.results[0], "RES");
      if (this.isLoaded) {
        this.setState({
          entities: response.results,
          load: false,
          count: response.count,
        });
      }
      this.isLoaded = false;
    } catch (err) {
      console.log(err);
    }
  };
  //ТУТ логику в componentDidUpdate
  handlePaginate = async (value) => {
    const { match } = this.props;
    const { params } = match;
    const response = await getItems(`${params.entity}?page=${value}`);

    this.setState({
      entities: response.results,
      load: false,
      count: response.count,
      currentPage: +value,
    });
  };

  render() {
    const { entities, load, count, currentPage } = this.state;
    const { match } = this.props;
    const { params } = match;
    return (
      <div>
        {load && <div style={{ color: "red", fontSize: "26px" }}>LOAD!!!!</div>}
        <List>
          {entities?.length > 0 &&
            entities.map((entity) => {
              const arr = entity.url.split("/");
              const id = arr[arr.length - 2];
              return (
                <Element
                  key={entity.name || entity.title}
                  id={id}
                  item={entity}
                  alias={params.entity}
                />
              );
            })}
        </List>
        <div>
          <Button
            type="button"
            className={styles.button_back}
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            GO Back
          </Button>
        </div>
        <div style={{ marginTop: "40px" }}>
          {entities?.length > 0 && (
            <Paginator
              count={count}
              itemsOnPage={entities?.length}
              currentPage={currentPage}
              handlePaginate={this.handlePaginate}
            />
          )}
        </div>
      </div>
    );
  }
}

function Paginator({ count, itemsOnPage, currentPage, handlePaginate }) {
  const ref = React.useRef(null);

  // React.useEffect(() => {
  //   if (ref.current) {
  //     ref.current.focus();
  //     // console.log(ref, "REF");
  //   }
  // }, []);

  // const pages = getQuatity(count, itemsOnPage);
  // console.log(pages, "PAGES");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(ref.current.value, "REF");
  //   handlePaginate(ref.current.value);
  // };

  return (
    <div>
      <Form
        initialValues={{
          page: "",
        }}
        formSubmit={() => {}}
      >
        {({ form, onChange }) => {
          // console.log(renderProps, "RENDER");
          return (
            <>
              <input
                name="page"
                type="text"
                value={form["page"]}
                onChange={onChange}
              />
              <Button type="submit">submit</Button>{" "}
            </>
          );
        }}
      </Form>
    </div>
  );
}
