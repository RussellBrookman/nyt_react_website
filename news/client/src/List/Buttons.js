import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
// I need to ask Abe about this entire area. Don't forget to ask him how to shove these buttons in the heading. /Form/Input.js
export const SaveButton = ({ type, className, children, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-${type ? type : "default"}${className
      ? " " + className
      : ""}`}
  >
    {children}
  </button>
);

export const RemoveButton = ({ type, className, children, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-${type ? type : "default"}${className
      ? " " + className
      : ""}`}
  >
    {children}
  </button>
);

export const UpdateButton = ({ type, className, children, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-${type ? type : "default"}${className
      ? " " + className
      : ""}`}
  >
    {children}
  </button>
);