import React from "react";

export const TitleOfArticle = props =>
	<a href={props.href} target="_blank">
		{props.title}
	</a>;	