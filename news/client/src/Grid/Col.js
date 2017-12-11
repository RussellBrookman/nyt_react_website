import React from "react";

// size.split: The pain keeps it's size while the second pane is resized to fit the browser window
// .map: Used to change an array with the "string" type to an array of React.DOM elements
// col-: I have to ask Abe. It looks like a bootstrap thing but I'm not sure
export const Col = ({ size, children }) =>
	<div className={size.split(" ").map(size => "col-" + size).join(" ")}>
		{children}
	</div>;