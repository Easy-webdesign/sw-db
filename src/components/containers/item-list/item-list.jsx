import React, { Component } from "react";
import { ItemLi } from "../../UI";

import "./item-list.scss";

const ItemList = (p) => {
  const renderListItems = () => {
    return p.data.map((el) => {
      const name = p.children(el);
      return (
        <ItemLi
          key={el.id}
          name={name}
          onClickHandler={(e) => {
            p.onItemSelected(el.id);
          }}
        />
      );
    });
  };

  return <ul className="item-list list-group">{renderListItems()}</ul>;
};

export default ItemList;
