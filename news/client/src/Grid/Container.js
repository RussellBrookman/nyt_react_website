import React from "react";

// fluid: allow's resizing of containers. I might need a little more explination on this one.
export const Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;