import React from "react";

// passing the button component as it's children 
// props.children: this renders the button
export const FormBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-success">
    {props.children}
  </button>;