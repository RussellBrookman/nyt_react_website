import React from "react";

// remember to get rid of this if I don't end up needing a search or comment area.
export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="20" {...props} />
  </div>;