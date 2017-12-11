import React from "react";
import "./Panel.css";

// the heading tag is like handlebars. I beleave this will link back to my heading tag. 
// children, according to the API docs, should be the article.
export default const Panel = ({ heading, children })
	<div class="container">
  		<div className="panel panel-default">
    		<div className="panel-heading text-left">
    			<h2>{ heading }</h2>
    		</div>
    	</div>
    	<div class="panel-body">
    		{ children }
    	</div>
	</div>;	