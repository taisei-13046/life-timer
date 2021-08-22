import React from "react"
import styled from "styled-components"

import { DropDownEndAge } from "../atoms/DropDownEndAge"

export const EndAgeQuestion = (props) => {
	const {endAge, setEndAge} = props;
	return (
		<>
			<SquestionDiv >何歳まで生きる予定ですか？</SquestionDiv>
			<DropDownEndAge endAge={endAge} setEndAge={setEndAge} />
		</>
	)
}

const SquestionDiv = styled.div`
	padding: 1rem 2rem;
	border-bottom: 6px double #000;
	background: #f4f4f4;
	margin: 50px 700px 0px 280px;
`
