import React, { useState } from "react";
import { useParams } from "react-router";
import { getItems } from "../../services/swapi-api";

const Item = () => {
  const { entity, id } = useParams();
  const [item, setItem] = useState(null);

  React.useEffect(() => {
    async function getItemsRequest() {
      const response = await getItems(`${entity}/${id}`);
      setItem(response);
    }
    getItemsRequest();
  }, []);
  console.log(item);
  if (!item) {
    return null;
  }
  return (
    <div>
      {Object.keys(item).map((e) => {
        console.log(e);
        return (
          typeof item[e] === "string" && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ marginRight: " 20px" }}>{e}</div>
              <div>{item[e]}</div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Item;
