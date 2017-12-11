import React from "react";

// list-group-item: the items within the list, bootstrap
export const ListItem = props =>
  <li className="list-group-item">
    {props.children}
  </li>;