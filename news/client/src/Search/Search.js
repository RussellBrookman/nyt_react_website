import React from "react";

import Panel from "..Panel";
// this could have been { Col, Row }. I don't know which is correct.
import * from "../Grid";
import * from "../Form";

// sourse for my refrence: https://github.com/NYTimes/public_api_specs/blob/master/article_search/article_search_v2.md

export default const Search = props =>
	<Row>
		<Col size="sm-8"></Col>
		<Col size="sm-4">
			<Panel heading="Search">
				<form>
					<Input
						heading="Topics"
						value={props.state.topics}
						onChange={props.handleInputChange}
						name="topics"
						placeholder="Search Topics"
					/>
					<FormBtn
						disabled={!props.state.topics}
						onClick={props.handleFormSubmit}
					>Submit</FormBtn>
				</form>
			</Panel>
		</Col>
	</Row>;