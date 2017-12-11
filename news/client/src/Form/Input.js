import React from "react";

// ...: I have to ask Abe about this. It should put everything in the form control and push it into a state where it can "react"
export const Input = props =>
	<div className="form-group">
		<h3 className="text-left">{props.heading}</h3>
		<input className="form-control" {...props}/>
	</div>;