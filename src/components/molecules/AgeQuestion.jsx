import React from "react"
import styled from "styled-components"

import { DropDownAge } from "../atoms/DropDownAge"

export const AgeQuestion = (props) => {
	const {age, setAge} = props;
	return (
		<>
			<SquestionDiv>今は何歳ですか？</SquestionDiv>
			<DropDownAge age={age} setAge={setAge} />
		</>
	)
}

const SquestionDiv = styled.div`
	padding: 1rem 2rem;
	border-bottom: 6px double #000;
	background: #f4f4f4;
	margin: 50px 700px 0px 280px;
`
